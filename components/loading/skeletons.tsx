const shimmer =
  'before:absolute before:inset-0  before:animate-[shimmer_2s_infinite_alternate] before:bg-[#778899]'
export function BannerSkeleton() {
  return <div className={`${shimmer} w-screen h-[648px] relative`}></div>
}
