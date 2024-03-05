export function removeElWithValue(arr: string[], value: string) {
  const newArr = arr.filter(item => item !== value)
  return newArr
}

export function generatePaginationNumber(
  total_pages: number,
  currentPage: number
) {
  //if current page <= 7 => diplay all page without any ellipsis
  if (total_pages <= 7) {
    return Array.from({ length: total_pages }, (_, i) => i + 1)
  }
  //if currentPage <=3 => display the first 3 , ellipsis , lastPage
  if (currentPage <= 3) return [1, 2, 3, '...', total_pages]

  // if currentPage is among the last 3 page => show first 2 , ellipsis , and last 3 page
  if (currentPage >= total_pages - 2)
    return [1, 2, '...', total_pages - 2, total_pages - 1, total_pages]

  // default : if currentPage si somewhere in middle => show first 2 , ellips , the currentPage and its neighbors , another ellipsis , lastpage
  return [
    1,
    2,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    total_pages
  ]
}
