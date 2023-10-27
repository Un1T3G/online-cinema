import { ImageUploadField } from 'features/files'
import { Controller, useForm } from 'react-hook-form'
import { IActorUpdateDto } from 'shared/api'
import { generateSlug } from 'shared/lib/generate-slug'
import { Button } from 'shared/ui/button'
import { Input } from 'shared/ui/input'
import { SlugField } from 'shared/ui/slug-field/ui'
import { AdminLayout } from 'widgets/admin'

import { useActorEdit } from './lib/use-actor-edit'
import styles from './style.module.scss'

export const AdminPanelActorEditPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
    setValue,
    getValues,
  } = useForm<IActorUpdateDto>({ mode: 'onChange' })

  const { onSubmit } = useActorEdit(setValue)

  return (
    <AdminLayout title="Actor edit">
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
          name="photo"
          control={control}
          defaultValue=""
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <ImageUploadField
              label="Photo"
              error={error?.message}
              folder="actors"
              image={value}
              onChange={onChange}
              className="mb-5"
            />
          )}
          rules={{
            required: 'Photo is required!',
          }}
        />
        <Button type="submit">Update</Button>
      </form>
    </AdminLayout>
  )
}
