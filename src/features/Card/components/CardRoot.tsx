import { Card } from "@/components/ui/card"

export const CardRoot = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <Card
      className={`group flex flex-row justify-between items-center py-4 pl-2 pr-4 cursor-pointer mt-4 shadow-sm hover:shadow-md transition-all ease-in ${className}`}
    >
      {children}
    </Card>
  )
}
