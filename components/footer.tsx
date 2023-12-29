import GithubIcon from '@/components/icon/git'
import FbIcon from '@/components/icon/fb'

export default function Footer() {
  return (
    <footer className="flex mt-10 items-center justify-between px-10 py-5  border-t-[1px] border-gray-500">
      <span className="text-xl font-semibold">Copy right &copy; 2023</span>
      <div className="flex items-center gap-2">
        <span className="text-xl font-semibold">Contact me</span>
        <span className="cursor-pointer hover:text-purple-600">
          <a href="https://github.com/HoaLe69/movies">
            <GithubIcon />
          </a>
        </span>
        <span className="cursor-pointer hover:text-blue-600">
          <a href="https://facebook.com/newcastle.le.19">
            <FbIcon />
          </a>
        </span>
      </div>
    </footer>
  )
}
