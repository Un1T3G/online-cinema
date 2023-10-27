export const setFormValues = <T>(
  setValue: (...args: any[]) => void,
  object: T,
  ignoreKeys: (keyof T)[] = []
) => {
  Object.keys(object as any).forEach((key) => {
    if (ignoreKeys.includes(key as any)) {
      return
    }

    const value = (object as any)[key]
    setValue(key as any, value)
  })
}
