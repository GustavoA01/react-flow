import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { DrawerNavButton } from "@/features/DrawerNavigation/container/DrawerNavButton";
import { UserToolTip } from "@/features/HeaderToolTip/container/UserToolTip";
import { LogoutDialog } from "./LogoutDialog";
import { useState } from "react";

const headerItems = [
  { name: "Cursos", path: "/cursos" },
  { name: "Mapa", path: "/" },
];

export const Header = () => {
  const { pathname } = useLocation();
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <header className=" bg-primary text-white">
      <div className="flex justify-between items-center px-4 py-6 container mx-auto sm:px-6 lg:px-8">
        <h1 className="font-semibold select-none font-montserrat">
          <Link to="/">Beira Linha Play</Link>
        </h1>

        <nav className="flex items-center gap-2">
          <UserToolTip setOpenDialog={() => setOpenDialog(true)} />
          {headerItems.map(({ name, path }) => (
            <Button
              key={path}
              className={`hidden sm:block text-md font-montserrat hover:bg-primary-dark/50 transition-all ease-in ${
                pathname === path ? "text-white" : "text-zinc-300"
              }`}
            >
              <Link key={name} to={path}>
                {name}
              </Link>
            </Button>
          ))}
          <DrawerNavButton />
        </nav>
        <LogoutDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
      </div>
    </header>
  );
};
