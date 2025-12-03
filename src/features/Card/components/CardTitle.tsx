export const CardTitle = ({
  title,
  className,
}: {
  className?: string
  title: string
}) => {
  return (
    <h2 className={`font-semibold sm:text-lg text-zinc-600 ${className}`}>
      {title}
    </h2>
  )
}
