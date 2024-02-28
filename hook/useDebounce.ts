import { useEffect, useState } from 'react'

export default function useDebounce(searchValue: string, delay: number) {
  const [value, setValue] = useState<string>(searchValue)
  useEffect(() => {
    const timer = setTimeout(() => setValue(searchValue), delay)
    return () => clearTimeout(timer)
  }, [searchValue, delay])
  return value
}
