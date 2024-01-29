'use client'
import FilterSort from './filter-sort'
import FilterAdvance from './filter-advance'

export default function FilterFilm({ type }: { type: string }) {
  return (
    <>
      <FilterSort />
      <FilterAdvance type={type} />
    </>
  )
}
