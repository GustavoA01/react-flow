import { Circle } from "lucide-react"

type DescriptionCircleProps = {
  right: string
  left: string
  className?: string
  textColor?:string
  fill?: string
}

export const DescriptionCircle = ({
  right,
  left,
  className,
  textColor = "zinc-500",
  fill = "gray",
}: DescriptionCircleProps) => {
  return (
    <p className={`flex items-center text-${textColor} text-xs sm:text-sm gap-2 ${className}`}>
      <span className="line-clamp-1">{left}</span>
      <Circle className={`fill-${fill}`} fill={fill} size={4} />
      <span className="line-clamp-1">{right}</span>
    </p>
  )
}
