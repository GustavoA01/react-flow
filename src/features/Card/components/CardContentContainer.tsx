import type { BasicCardProps } from "@/data/types"

export const CardContentContainer = ({
  children,
  className,
}: BasicCardProps) => {
  return (
    <div className={`flex items-center gap-4 pl-2 ${className}`}>
      {children}
    </div>
  )
}
