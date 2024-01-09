import clsx from "clsx"

export function Button({
  children,
  outline,
  primary
}: {
  children: React.ReactNode
  outline?: boolean
  primary?: boolean
}) {
  return (
    <button
      className={clsx(
        "px-6 py-3  rounded-xl font-bold text-sm",
        {
          "bg-green-500": primary
        },
        { "border-white border-2": outline }
      )}
    >
      {children}
    </button>
  )
}
