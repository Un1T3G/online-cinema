export const generateSlug = (value: string) => {
  return value
    .trim()
    .split(' ')
    .map((x) => x.toLocaleLowerCase())
    .join('-')
}
