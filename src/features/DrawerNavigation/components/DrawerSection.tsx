import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type DrawerSectionProps = {
  title: string;
  pathName: string;
  sectionItens: {
    label: string;
    path: string;
    icon: React.ComponentType<{ size: number; className?: string }>;
    onClick: () => void;
  }[];
};

export const DrawerSection = ({
  title,
  pathName,
  sectionItens,
}: DrawerSectionProps) => {
  return (
    <section>
      <h2 className="text-xs text-zinc-500 pl-2 mb-2">{title}</h2>

      <div className="flex flex-col gap-2">
        {sectionItens.map(({ label, path, icon: Icon, onClick }) => {
          if (label !== "Sair") {
            return (
              <Link
                key={label}
                to={path}
                onClick={onClick}
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
                <p>{label}</p>
              </Link>
            );
          } else {
            return (
              <Button
                onClick={onClick}
                variant="ghost"
                className={`flex justify-start items-center text-base font-normal space-x-2 text-zinc-600`}
              >
                <Icon className="text-zinc-400" size={20} />
                <p>{label}</p>
              </Button>
            );
          }
        })}
      </div>
    </section>
  );
};
