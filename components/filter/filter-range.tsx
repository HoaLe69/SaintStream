export default function FilterRange() {
  return (
    <div className="py-2">
      <p className="py-2">Runtime</p>
      <div className="flex items-center justify-between mb-2 text-gray-300">
        <span>
          From <strong>0 </strong>min
        </span>
        <span>
          To <strong>200 </strong>min
        </span>
      </div>
      <div className="w-full bg-black h-2 rounded-md relative group cursor-pointer">
        <div className="absolute bg-green-500 rounded-md left-0 top-0 bottom-0 w-1/2">
          <div className="group-hover:block border-2 bg-green-500 absolute hidden h-3 w-3 rounded-full right-0 top-2/4 translate-y-[-50%]"></div>
        </div>
      </div>
    </div>
  )
}
