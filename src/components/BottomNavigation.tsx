import { Map, NotebookPen, Trophy } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";

const buttons = [
  {
    icon: <NotebookPen />,
    to: "/cursos",
  },
  {
    icon: <Map />,
    to: "/",
  },
  {
    icon: <Trophy />,
    to: "/rankings",
  },
];

export const BottomNavigation = () => {
  const { pathname } = useLocation();

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-6 items-center w-50 left-1/2 -translate-x-1/2 rounded-full gap-6 bg-white shadow-md py-2 flex justify-center sm:hidden"
    >
      {buttons.map((button) => {
        const selected = pathname === button.to;

        return (
          <Link key={button.to} to={button.to} className="relative">
            <motion.div
              initial={false}
              className={`rounded-full ${selected && "text-white p-3"}`}
              animate={{
                backgroundColor: selected ? "#2d5586" : "#ffffff",
                transition: { stiffness: 300, damping: 20, type: "spring" },
                opacity: selected ? 1 : 0.3,
                scale: selected ? 1.1 : 1,
                y: selected ? -3 : 0,
              }}
            >
              {button.icon}
            </motion.div>
          </Link>
        );
      })}
    </motion.nav>
  );
};
