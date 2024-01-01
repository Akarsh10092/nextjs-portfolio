import clsx from 'clsx'

export function Container({ className, ...props }) {
  return (
    <div
      className={clsx('mx-auto max-w-7xl md:px-4', className)}
      {...props}
    />
  )
}