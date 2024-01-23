'use client'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'

export default function FilterDate() {
  const pathname = usePathname()
  const { replace } = useRouter()
  const searchParams = useSearchParams()
  const fallBackFromDate = searchParams.get('from')
  const fallBackToDate = searchParams.get('to')
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const params = new URLSearchParams(searchParams)
    params.set(name, value)
    replace(`${pathname}?${params.toString()}`)
  }
  return (
    <div className="py-2">
      <p className="py-2">Release Dates</p>
      <div>
        <div>
          <label className="text-gray-400 inline-block w-[60px]">
            <strong>From</strong>
          </label>
          <input
            onChange={handleOnChange}
            defaultValue={
              fallBackFromDate ||
              new Date('11-05-2002').toISOString().split('T')[0]
            }
            className="bg-gray-700 px-2 py-1 rounded-md"
            type="date"
            name="from"
          />
        </div>
        <div className="mt-3">
          <label className="inline-block w-[60px] text-gray-400">
            <strong>To</strong>
          </label>
          <input
            onChange={handleOnChange}
            defaultValue={
              fallBackToDate ||
              new Date('07-22-2024').toISOString().split('T')[0]
            }
            className="bg-gray-700 px-2 py-1 rounded-md"
            type="date"
            name="to"
          />
        </div>
      </div>
    </div>
  )
}
