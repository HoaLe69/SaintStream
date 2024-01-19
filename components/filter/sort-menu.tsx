import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import clsx from 'clsx'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'

export default function SortMenu() {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const menu = [
    { title: 'Most popular', value: 'popularity.desc' },
    { title: 'Most rating', value: 'vote_average.desc' },
    { title: 'Most recent', value: 'release_date.desc' }
  ]
  const sortBy = searchParams.get('sort_by') || 'popularity.desc'
  const createUrl = (sortValue: string): string => {
    const params = new URLSearchParams(searchParams)
    params.set('sort_by', sortValue)
    return `${pathname}?${params.toString()}`
  }
  const [sortType] = menu.filter(item => sortBy === item.value)
  return (
    <div className="bg-gray-900 mt-2">
      <div className="p-2 rounded-md bg-[rgba(255,255,255,0.1)] flex items-center relative">
        <span>{sortType.title}</span>
        <ChevronDownIcon
          className="w-8 h-full ml-auto cursor-pointer p-2  hover:opacity-75"
          onClick={() => setShowMenu(!showMenu)}
        />
        <div
          className={clsx(
            'w-full absolute top-[110%] bg-gray-900  left-0 rounded-md shadow-sm shadow-gray-500',
            {
              block: showMenu,
              hidden: !showMenu
            }
          )}
        >
          {menu.map((item, index) => {
            return (
              <SortMenuItem
                href={createUrl(item.value)}
                key={index}
                title={item.title}
                active={item.value === sortBy}
                handleHideMenu={setShowMenu}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

function SortMenuItem({
  title,
  href,
  active,
  handleHideMenu
}: {
  title: string
  href: string
  active: boolean
  handleHideMenu: Dispatch<SetStateAction<boolean>>
}) {
  return (
    <Link href={href}>
      <div
        onClick={() => handleHideMenu(false)}
        className={clsx('p-2 cursor-pointer hover:bg-[rgba(255,255,255,0.1)]', {
          'bg-[rgba(255,255,255,0.1)]': active
        })}
      >
        {title}
      </div>
    </Link>
  )
}
