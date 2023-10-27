export const range = (length: number): number[] => {
  return Array.from({ length: length + 1 }, (_, i) => i)
}
