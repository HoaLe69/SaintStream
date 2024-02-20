'use server'
import Image from 'next/image'
import MovieActions from './movie-actions'
import { fetchDetail } from '@/lib/data'
import { DETAIL_TV } from '@/lib/endpoint'
import { TVSHOW } from '@/lib/definitions'

export default async function BannerTV({ movieId }: { movieId: string }) {
     const banner: TVSHOW = await fetchDetail(DETAIL_TV(movieId))
  
  //heljasdlkasjd
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
            <div className="py-11 flex  gap-x-10 items-center ">
              <Image
                src={`https://image.tmdb.org/t/p/original${banner?.poster_path}`}
                width={250}
                height={400}
                className="rounded-md"
                alt={banner?.original_name || 'banner about film'}
              />
              <div className="py-7 flex flex-col gap-5">
                <h1 className="text-4xl font-bold">{banner?.original_name}</h1>
                <p className="text-sm text-gray-400 font-normal">
                  {banner?.first_air_date} &#x2022;{' '}
                  {banner?.genres &&
                    banner.genres.map(genres => genres.name).join(' • ')}
                </p>
                <div>
                  <MovieActions movieId={movieId} tvshow />
                </div>
                <strong className="text-xl">Overview</strong>
                <p>{banner?.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
