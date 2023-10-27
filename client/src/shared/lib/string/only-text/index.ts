export const onlyText = (str: string) => {
  str = str.replace(/<.*?>/g, '')

  str = str.replace(/&[A-Za-z0-9]+;/g, '')

  return str
}
