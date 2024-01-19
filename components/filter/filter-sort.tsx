'use client'
import clsx from 'clsx'
import { useState } from 'react'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import SortMenu from './sort-menu'

export default function FilterSort() {
  const [showFilterSort, setShowFilterSort] = useState<boolean>(true)
  return (
    <div className="bg-gray-900 px-2 rounded-md ">
      <div
        onClick={() => setShowFilterSort(!showFilterSort)}
        className="py-2 flex items-center rounded-md cursor-pointer"
      >
        <p className="font-bold ">Sort</p>
        <span className="ml-auto ">
          {showFilterSort ? (
            <ChevronDownIcon className="w-4 h-4 font-bold" />
          ) : (
            <ChevronRightIcon className="w-4 h-4 font-bold" />
          )}
        </span>
      </div>
      <div
        className={clsx('border-t-2 border-black py-2', {
          block: showFilterSort,
          hidden: !showFilterSort
        })}
      >
        <p className="font-bold">Sort results by</p>
        <SortMenu />
      </div>
    </div>
  )
}
