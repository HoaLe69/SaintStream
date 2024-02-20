export default function AutoGenImage({ userName }: { userName: string }) {
  const bgs: string[] = ['#7b7170', '#6f6f6f', '#252f38', '#151e23', '#dbd1d0']
  const colorIndex = Math.floor(Math.random() * bgs.length)
  return (
    <div
      className="w-[40px] rounded-full h-[40px] flex items-center justify-center"
      style={{ backgroundColor: `${bgs[colorIndex]}` }}
    >
      <p className="uppercase font-bold text-white text-xl">
        {userName && userName.charAt(0)}
      </p>
    </div>
  )
}
