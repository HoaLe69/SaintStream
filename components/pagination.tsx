import { useSearchParams, usePathname } from 'next/navigation'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { generatePaginationNumber } from '@/utils/utils'
import clsx from 'clsx'
import Link from 'next/link'

type Props = {
  total_pages: number | undefined
}
export default function Pagination({ total_pages = 1 }: Props) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page') || 1)
  const allPage = generatePaginationNumber(total_pages, currentPage)
  console.log(allPage)

  const createUrl = (numPage: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', numPage.toString())
    return `${pathname}?${params.toString()}`
  }
  return (
    <div className="flex items-center justify-center pt-4">
      <PaginationArrow
        isDisable={currentPage == 1}
        direction="left"
        href={createUrl(Number(currentPage) - 1)}
      />
      <div className="flex items-center gap-3">
        {allPage.map((page, index) => {
          return (
            <PaginationNumber
              href={createUrl(page)}
              active={currentPage === page}
              key={index}
              numPage={page}
            />
          )
        })}
      </div>
      <PaginationArrow
        isDisable={currentPage === total_pages}
        direction="right"
        href={createUrl(Number(currentPage) + 1)}
      />
    </div>
  )
}

function PaginationNumber({
  href,
  numPage,
  active
}: {
  href: string
  numPage: number | string
  active: boolean
}) {
  const className = clsx(
    'text-xl font-bold text-gray-500  p-2 px-4 rounded-md cursor-pointer',
    {
      'bg-blue-900 text-white': active
    }
  )
  return numPage === '...' ? (
    <span className="text-xl font-bold text-gray-500">{numPage}</span>
  ) : (
    <Link href={href} scroll={false}>
      <span className={className}>{numPage}</span>
    </Link>
  )
}

function PaginationArrow({
  direction,
  href,
  isDisable
}: {
  direction: string
  href: string
  isDisable: boolean
}) {
  const className = 'w-8 h-8 text-gray-500 hover:text-white cursor-pointer'
  const isLeft = direction === 'left'
  const isRight = direction === 'right'
  const icon = isLeft ? (
    <ChevronLeftIcon className={className} />
  ) : (
    <ChevronRightIcon className={className} />
  )
  return isDisable ? (
    <span
      className={clsx({
        'pl-4': isRight,
        'pr-4': isLeft,
        'opacity-55': isDisable
      })}
    >
      {icon}
    </span>
  ) : (
    <Link href={href} scroll={false} className="flex items-center">
      <span className={clsx({ 'pl-4': isRight, 'pr-4': isLeft })}>{icon}</span>
    </Link>
  )
}
