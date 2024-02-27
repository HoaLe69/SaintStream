import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'
type Props = {
  isOpenSearch: boolean
  setOpenSearch: Dispatch<SetStateAction<boolean>>
}
export default function Search({ isOpenSearch, setOpenSearch }: Props) {
  const handleCloseSearchModal = (e: React.MouseEvent) => {
    if (!(e.target as HTMLElement).closest('.search')) {
      setOpenSearch(false)
    }
  }
  return (
    <div
      onClick={handleCloseSearchModal}
      className={clsx(
        'fixed transition-all inset-0 bg-[rgba(0,0,0,0.6)] pt-32 z-50 flex justify-center',
        { hidden: isOpenSearch === false }
      )}
    >
      <div className="animate-scale search w-[600px] flex items-center h-max bg-slate-800 rounded-md px-2">
        <MagnifyingGlassIcon className="w-7 h-7 text-green-500" />
        <input
          className="w-full bg-slate-800 outline-none px-4 py-4 h-[68px] flex-1"
          name="search"
          placeholder="Search films"
        />
      </div>
    </div>
  )
}
