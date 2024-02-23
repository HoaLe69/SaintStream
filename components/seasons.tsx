import Image from 'next/image'
import { Season } from '@/lib/definitions'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { StarIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { fetchDetail } from '@/lib/data'
import { DETAIL_TV } from '@/lib/endpoint'

type Props = {
  id: string
}

export default async function Seasons({ id }: Props) {
  const seasons = await fetchDetail(DETAIL_TV(id))
  return (
    <div className="container mx-auto pr-2 relative">
      <h2 className="text-2xl mb-6 font-bold">Latest Season</h2>
      {seasons?.seasons &&
        seasons.seasons.map((season: Season, index: number) => {
          const overview =
            season.name +
            ' of ' +
            seasons?.original_name +
            'is set to premiere on ' +
            season.air_date
          if (index !== seasons.seasons.length - 1) return
          return (
            <div
              key={season.id}
              className="flex items-center w-full overflow-hidden rounded-lg  shadow-[0_2px_10px_rgba(255,255,255,0.1)] "
            >
              <div className="w-[130px] shrink-0 h-[195px]">
                <Image
                  src={`https://image.tmdb.org/t/p/original${season?.poster_path}`}
                  width={130}
                  height={195}
                  className="h-full w-full"
                  alt={season.name}
                />
              </div>
              <div className="ml-4 ">
                <p className="font-bold text-xl">{season.name}</p>
                <span>
                  <span className="rounded-xl flex items-center shadow-red-300 gap-2 mb-2">
                    <StarIcon className="w-6 h-6 text-yellow-500" />
                    {season.vote_average}
                  </span>
                  <strong>
                    {season?.air_date && season.air_date.split('-')[0]} &#x2022;
                    Episodes &#x2022; {season.episode_count}
                  </strong>
                </span>
                <p className="text-sm mt-2">
                  {season?.overview ? season?.overview : overview}
                </p>
              </div>
            </div>
          )
        })}
      <span className="mt-2 inline-block p-1 border-b-2 border-transparent hover:border-green-500 transition-all cursor-pointer duration-400 ">
        <Link className="font-semibold" href="/">
          View All Season
        </Link>
      </span>
    </div>
  )
}
