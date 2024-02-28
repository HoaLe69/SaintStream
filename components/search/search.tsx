import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'
import { useState, useEffect } from 'react'
import { fetchKeywords } from '@/lib/data'
import useDebounce from '@/hook/useDebounce'

type Props = {
  isOpenSearch: boolean
  setOpenSearch: Dispatch<SetStateAction<boolean>>
}
type SearchSuggest = {
  id: number
  name: string
}

export default function Search({ isOpenSearch, setOpenSearch }: Props) {
  const [searchValue, setSearchValue] = useState<string>('')
  const [searchResults, setSearchResult] = useState<SearchSuggest[]>([])
  const debounceValue = useDebounce(searchValue, 500)
  const handleCloseSearchModal = (e: React.MouseEvent) => {
    if (!(e.target as HTMLElement).closest('.search')) {
      setOpenSearch(false)
      setSearchResult([])
      setSearchValue('')
    }
  }
  useEffect(() => {
    async function getSearchResult(q: string) {
      const res = await fetchKeywords(q)
      if (res.length) {
        setSearchResult(res)
      }
    }
    if (debounceValue) {
      getSearchResult(searchValue)
    }
  }, [debounceValue, searchValue])
  return (
    <div
      onClick={handleCloseSearchModal}
      className={clsx(
        'fixed transition-all inset-0 bg-[rgba(0,0,0,0.6)] pt-32 z-50 flex justify-center',
        { hidden: isOpenSearch === false }
      )}
    >
      <div className="animate-scale search w-[600px] flex flex-col  h-max bg-slate-800 rounded-xl px-4">
        <div className="flex items-center">
          <MagnifyingGlassIcon className="w-7 h-7 text-green-500" />
          <input
            className="w-full bg-slate-800 outline-none px-4 py-4 h-[68px] flex-1"
            autoComplete="off"
            name="search"
            placeholder="Search films"
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
          />
        </div>
        <div className="">
          {searchResults.slice(0, 5).map(s => {
            return (
              <div
                key={s.id}
                className="flex items-center py-2 text-gray-400 gap-2 first:border-t-2 first:border-t-gray-600 cursor-pointer hover:text-white transition-all"
              >
                <MagnifyingGlassIcon className="w-6 h-6" />
                <p className="flex-1">{s.name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
