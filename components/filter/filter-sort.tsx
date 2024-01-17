'use client'
import clsx from 'clsx'
import { useState } from 'react'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

export default function FilterSort() {
  const [showFilterSort, setShowFilterSort] = useState<boolean>(true)
  return (
    <div className="w-full flex flex-col">
      <h3 className="font-semibold mb-2">Find your favorite film</h3>
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
          <div className="rounded-md mt-1 p-2 bg-[rgba(255,255,255,0.1)] flex items-center ">
            <p className="">Most rating</p>
            <span className="px-2 border-l-2 border-white ml-auto cursor-pointer">
              <ChevronDownIcon className="w-4 h-4 font-bold" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
