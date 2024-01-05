import { fetchMoviesDetail } from '@/lib/data'
import { MovieDetail } from '@/lib/definitions'
import { Button } from './button'
import { PlayIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

export default async function Banner({ movieId }: { movieId: string }) {
  const banner: MovieDetail = await fetchMoviesDetail(movieId)
  return (
    <div className="w-screen h-[648px] flex overflow-hidden relative">
      <div
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original${banner?.backdrop_path}')`
        }}
        className="w-screen bg-no-repeat bg-cover overflow-hidden h-[300px] md:h-[648px]"
      >
        <div className="absolute  inset-0 bg-[rgba(0,0,0,0.7)]">
          <div className="container px-2 mx-auto h-full flex items-end">
            <div className="py-11 flex  gap-x-5 items-start">
              <Image
                src={`https://image.tmdb.org/t/p/original${banner?.poster_path}`}
                width={300}
                height={450}
                className="rounded-md"
                alt="banner fiml"
              />
              <div>
                <h1 className="text-4xl font-bold">{banner?.original_title}</h1>
                <p className="text-sm text-gray-400 font-normal">
                  Release date &#x2022; {banner?.release_date}
                </p>
                <div className="flex items-center gap-4">
                  <Button primary>
                    <span className="flex items-center gap-2">
                      <PlayIcon className="w-6 h-6" />
                      <span>Play trailer</span>
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
