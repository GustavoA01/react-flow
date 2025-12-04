import { Link } from "react-router-dom"

type DrawerSectionProps = {
  title: string
  pathName: string
  onCloseDrawer: () => void
  sectionItens: {
    name: string
    path: string
    icon: React.ComponentType<{ size: number; className?: string }>
  }[]
}

export const DrawerSection = ({
  title,
  pathName,
  onCloseDrawer,
  sectionItens,
}: DrawerSectionProps) => {
  return (
    <section>
      <h2 className="text-xs text-zinc-500 pl-2 mb-2">{title}</h2>
      
      <div className="flex flex-col gap-2">
        {sectionItens.map(({ name, path, icon: Icon }) => (
          <Link
            key={name}
            to={path}
            onClick={onCloseDrawer}
            className={`flex pl-2 items-center py-2 space-x-4 ${
              pathName === path
                ? "bg-blue-onSurface/50 rounded-md text-blue-500 font-semibold"
                : "text-zinc-600"
            }`}
          >
            <Icon
              className={`${
                pathName === path ? "text-blue-500" : "text-zinc-400"
              }`}
              size={20}
            />
            <p>{name}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
