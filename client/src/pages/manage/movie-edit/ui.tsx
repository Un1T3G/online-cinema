import { ImageUploadField, VideoUploadField } from 'features/files'
import { Controller, useForm } from 'react-hook-form'
import { generateSlug } from 'shared/lib/generate-slug'
import { Button } from 'shared/ui/button'
import { Input } from 'shared/ui/input'
import { FormComboBox } from 'shared/ui/select'
import { SlugField } from 'shared/ui/slug-field/ui'
import { TextEditorWithLabel } from 'shared/ui/text-editor'
import { AdminLayout } from 'widgets/admin'

import { useActorsOptions } from './lib/use-actors-options'
import { useGenresOptions } from './lib/use-genres-options'
import { useMovieEdit } from './lib/use-movie-edit'
import styles from './style.module.scss'
import { IMovieEditInput } from './types'

export const AdminPanelMovieEditPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
    setValue,
    getValues,
  } = useForm<IMovieEditInput>({ mode: 'onChange' })

  const { actorsOptions, isActorsLoading } = useActorsOptions()
  const { genresOptions, isGenresLoading } = useGenresOptions()

  const { onSubmit } = useMovieEdit(setValue)

  return (
    <AdminLayout title="Movie Edit">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.row}>
          <Input>
            <Input.Label className={styles['input__title']}>Title</Input.Label>
            <Input.FieldContainer>
              <Input.Field
                {...register('title', {
                  required: 'Title is required!',
                })}
              />
            </Input.FieldContainer>
            <Input.ErrorMessage message={errors.title?.message} />
          </Input>
          <SlugField
            error={errors.slug?.message}
            register={register}
            onGenerate={() => {
              setValue('slug', generateSlug(getValues('title')))
            }}
          />
        </div>
        <div className={styles.row}>
          <Input>
            <Input.Label className={styles['input__title']}>
              Country
            </Input.Label>
            <Input.FieldContainer>
              <Input.Field
                {...register('parameters.country', {
                  required: 'Country is required!',
                })}
              />
            </Input.FieldContainer>
            <Input.ErrorMessage message={errors.parameters?.country?.message} />
          </Input>
          <Input>
            <Input.Label className={styles['input__title']}>
              Duration(min)
            </Input.Label>
            <Input.FieldContainer>
              <Input.Field
                {...register('parameters.duration', {
                  required: 'Duration is required!',
                })}
              />
            </Input.FieldContainer>
            <Input.ErrorMessage
              message={errors.parameters?.duration?.message}
            />
          </Input>
          <Input>
            <Input.Label className={styles['input__title']}>Year</Input.Label>
            <Input.FieldContainer>
              <Input.Field
                {...register('parameters.year', {
                  required: 'Year is required!',
                })}
              />
            </Input.FieldContainer>
            <Input.ErrorMessage message={errors.parameters?.year?.message} />
          </Input>
        </div>
        <div className={styles.row}>
          <Controller
            name="genres"
            control={control}
            rules={{
              required: 'Please select at least one genre!',
            }}
            render={({ field, fieldState: { error } }) => (
              <FormComboBox
                label="Genres"
                placeholder="Genres"
                field={field}
                options={genresOptions}
                isLoading={isGenresLoading}
                error={error?.message}
              />
            )}
          />
          <Controller
            name="actors"
            control={control}
            rules={{
              required: 'Please select at least one actor!',
            }}
            render={({ field, fieldState: { error } }) => (
              <FormComboBox
                label="Actors"
                placeholder="Actors"
                field={field}
                options={actorsOptions}
                isLoading={isActorsLoading}
                error={error?.message}
              />
            )}
          />
        </div>
        <div className={styles.row}>
          <Controller
            name="poster"
            control={control}
            defaultValue=""
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <ImageUploadField
                label="Poster"
                error={error?.message}
                folder="movies"
                image={value}
                onChange={(x) => {
                  onChange(x)
                  console.log(x)
                }}
              />
            )}
            rules={{
              required: 'Poster is required!',
            }}
          />
          <Controller
            name="bigPoster"
            control={control}
            defaultValue=""
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <ImageUploadField
                label="Big poster"
                error={error?.message}
                folder="movies"
                image={value}
                onChange={onChange}
              />
            )}
            rules={{
              required: 'Big poster is required!',
            }}
          />
        </div>
        <div className={styles.row}>
          <Controller
            name="videoUrl"
            control={control}
            defaultValue=""
            render={({ field: { onChange }, fieldState: { error } }) => (
              <VideoUploadField
                label="Video"
                error={error?.message}
                folder="movies"
                onChange={onChange}
              />
            )}
            rules={{
              required: 'Video is required!',
            }}
          />
        </div>
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
