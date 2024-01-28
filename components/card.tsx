import Link from 'next/link'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/solid'

type Props = {
  id: number
  poster_path: string
  prefix: string
  original_title?: string
  original_name?: string
  vote_average: number
  release_date?: string
  first_air_date?: string
}

export default function Card({
  id,
  poster_path,
  original_title,
  original_name,
  vote_average,
  release_date,
  first_air_date,
  prefix
}: Props) {
  return (
    <Link href={`/${prefix}/${id}`}>
      <div className="transition-all hover:scale-[0.98]">
        <div className="relative w-[200px] h-[300px] overflow-hidden rounded-xl">
          <Image
            style={{ scale: '0.98', filter: 'blur(5px)' }}
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt={poster_path}
            width={200}
            height={300}
            className="animate-[blur_0.2s_ease-in-out_forwards] rounded-xl w-full h-full object-cover"
          />
          <div className="absolute p-3 inset-0 w-full bg-dark-to-light flex flex-col justify-end">
            <p className="text-[16px] font-bold truncate w-[70%]">
              {original_title || original_name}
            </p>
            <div className="flex items-center gap-2">
              <span className="flex items-center">
                <StarIcon className="w-6 h-6 text-yellow-400" />
                <span className="text-sm font-semibold">
                  {vote_average.toFixed(1)}
                </span>
              </span>
              <p className="text-xs leading-3 text-gray-400 pl-2 border-l-2 border-gray-400">
                {release_date && release_date.split('-')[0]}
                {first_air_date && first_air_date.split('-')[0]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
