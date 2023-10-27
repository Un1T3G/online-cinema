export function getElementCoordinate(element: HTMLElement) {
  const rect = element.getBoundingClientRect()
  const { scrollX, screenY } = window

  return {
    left: rect.left + scrollX,
    right: rect.right + scrollX,
    top: rect.top + screenY,
    bottom: rect.bottom + screenY,
  }
}
