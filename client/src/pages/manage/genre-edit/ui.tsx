import { Controller, useForm } from 'react-hook-form'
import { IGenreUpdateDto } from 'shared/api'
import { generateSlug } from 'shared/lib/generate-slug'
import { Button } from 'shared/ui/button'
import { Input } from 'shared/ui/input'
import { IconSelectWithLabel } from 'shared/ui/select'
import { SlugField } from 'shared/ui/slug-field/ui'
import { TextEditorWithLabel } from 'shared/ui/text-editor'
import { AdminLayout } from 'widgets/admin'

import { useGenreEdit } from './lib/use-genre-edit'
import styles from './style.module.scss'

export const AdminPanelGenreEditPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
    setValue,
    getValues,
  } = useForm<IGenreUpdateDto>({ mode: 'onChange' })

  const { onSubmit } = useGenreEdit(setValue)

  return (
    <AdminLayout title="Genre edit">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.row}>
          <Input>
            <Input.Label className={styles['input__title']}>Title</Input.Label>
            <Input.FieldContainer>
              <Input.Field
                {...register('name', {
                  required: 'Name is required!',
                })}
              />
            </Input.FieldContainer>
            <Input.ErrorMessage message={errors.name?.message} />
          </Input>
          <SlugField
            error={errors.slug?.message}
            register={register}
            onGenerate={() => {
              setValue('slug', generateSlug(getValues('name')))
            }}
            labelClassName={styles['input__title']}
          />
        </div>
        <Controller
          name="icon"
          control={control}
          rules={{
            required: 'Please select a icon!',
          }}
          render={({ field, fieldState: { error } }) => (
            <IconSelectWithLabel
              label="Icon"
              value={
                field.value
                  ? {
                      label: field.value,
                      value: field.value as any,
                    }
                  : (undefined as any)
              }
              onChange={(values) => field.onChange(values[0].value)}
              error={error?.message}
              className="mb-5"
            />
          )}
        />
        <Controller
          name="description"
          control={control}
          defaultValue=""
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <TextEditorWithLabel
              label="Description"
              value={value}
              onChange={onChange}
              placeholder="Description"
              error={error?.message}
              className="mb-5"
            />
          )}
          rules={{
            required: 'Description is required!',
          }}
        />
        <Button type="submit">Update</Button>
      </form>
    </AdminLayout>
  )
}
