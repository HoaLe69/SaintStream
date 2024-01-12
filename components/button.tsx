import clsx from 'clsx'

export function Button({
  children,
  outline,
  primary,
  classes,
  handleClick
}: {
  children: React.ReactNode
  outline?: boolean
  primary?: boolean
  classes?: string
  handleClick?: () => void
}) {
  return (
    <button
      onClick={handleClick}
      className={clsx(
        `px-5 py-3  rounded-xl font-bold text-sm hover:scale-95 transition-all ${classes}`,
        {
          'bg-green-500': primary
        },
        { 'border-white border-2': outline }
      )}
    >
      {children}
    </button>
  )
}
