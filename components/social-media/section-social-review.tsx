'use client'
import { fetchReview } from '@/lib/data'
import { FEEDBACK_MV, FEEDBACK_TV } from '@/lib/endpoint'
import { useParams, usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { Reviews } from '@/lib/definitions'
import Image from 'next/image'
import AutoGenImage from '@/components/auto-gen-image'
import { MediaReviewSkeletons } from '@/components/loading/skeletons'

export default function MediaReview() {
  const [reviews, setReviews] = useState<Reviews[]>([])
  const pathname = usePathname()
  const { id } = useParams()
  useEffect(() => {
    async function getReviews() {
      const res = await fetchReview(
        pathname.includes('tv')
          ? FEEDBACK_TV(id.toString())
          : FEEDBACK_MV(id.toString())
      )
      if (res) setReviews(res)
    }
    getReviews()
  }, [id])
  return (
    <div className="max-h-[200px] overflow-auto">
      {reviews.length > 0 ? (
        reviews.map((review: Reviews) => {
          return (
            <div key={review.id} className="flex items-start gap-2">
              {review.author_details.avatar_path ? (
                <div className="w-[40px] h-[40px] ">
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${review.author_details.avatar_path}`}
                    width={40}
                    height={40}
                    alt={review.author_details.username}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
              ) : (
                <AutoGenImage userName={review.author_details.username} />
              )}
              <div className="flex-1">
                <strong>{review?.author_details?.username}</strong>
                <P>{review?.content}</P>
              </div>
            </div>
          )
        })
      ) : (
        <MediaReviewSkeletons />
      )}
    </div>
  )
}

function P({ children }: { children: string }) {
  const refP = useRef<HTMLParagraphElement>(null)
  const refDiv = useRef<HTMLDivElement>(null)
  //display button show more content
  useEffect(() => {
    if (refP?.current) {
      const p = refP.current
      if (p.offsetHeight < p.scrollHeight || p.offsetWidth < p.scrollWidth) {
        const divEl = refDiv.current
        if (divEl) {
          divEl.style.display = 'inline-block'
        }
      }
    }
  }, [refP?.current])

  // toggle expand content
  const handleExpandComment = () => {
    const p = refP.current
    const divEl = refDiv.current
    if (p) {
      const isExpand = p.classList.contains('line-clamp-3')
      if (isExpand) {
        p.classList.remove('line-clamp-3')
        divEl!.textContent = 'See less'
      } else {
        p.classList.add('line-clamp-3')
        divEl!.textContent = 'See more'
      }
    }
  }
  return (
    <div>
      <p ref={refP} className="line-clamp-3 text-gray-300">
        {children}
      </p>
      <div
        ref={refDiv}
        className="text-right w-full hidden hover:underline text-green-300 cursor-pointer "
        onClick={handleExpandComment}
      >
        See more
      </div>
    </div>
  )
}
