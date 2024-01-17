export default function FilterDate() {
  return (
    <div className="py-2">
      <p className="py-2">Release Dates</p>
      <div>
        <div>
          <label className="inline-block w-[60px]">
            <strong>From</strong>
          </label>
          <input className="bg-gray-500" type="date" name="from-date" />
        </div>
        <div className="mt-3">
          <label className="inline-block w-[60px]">
            <strong>To</strong>
          </label>
          <input className="bg-gray-500" type="date" name="to-date" />
        </div>
      </div>
    </div>
  )
}
