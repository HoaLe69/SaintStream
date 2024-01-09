import { HeartIcon } from '@heroicons/react/16/solid'
import { BookmarkIcon } from '@heroicons/react/16/solid'
import { StarIcon } from '@heroicons/react/16/solid'

export default function MovieActions() {
  return (
    <div className="flex items-center gap-3">
      <span className="inline-block p-2 rounded-full bg-black">
        <HeartIcon className="w-6 h-6" />
      </span>
      <span className="inline-block p-2 rounded-full bg-black">
        <BookmarkIcon className="w-6 h-6" />
      </span>
      <span className="inline-block p-2 rounded-full bg-black">
        <StarIcon className="w-6 h-6" />
      </span>
    </div>
  )
}
