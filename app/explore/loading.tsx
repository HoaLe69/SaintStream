import FilterFilm from '@/components/filter/filter'

export default function LoadingExplore() {
  return (
    <div className="pt-24 max-w-[1400px] mx-auto px-2">
      <div className="flex items-start gap-x-10">
        <div className="w-[300px] shrink-0">
          <FilterFilm />
        </div>
        <div className="flex-1 flex flex-wrap gap-4">
          <p>Loading...</p>
        </div>
      </div>
    </div>
  )
}
