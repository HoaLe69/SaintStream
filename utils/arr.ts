export function removeElWithValue(arr: string[], value: string) {
  const newArr = arr.filter(item => item !== value)
  return newArr
}
