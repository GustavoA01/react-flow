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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3, ease: "easeIn" } }}
      className="fixed bottom-3 items-center w-50 self-center rounded-full gap-6 bg-white shadow-md py-2 flex justify-center sm:hidden"
    >
      {buttons.map((button) => {
        const selected = pathname === button.to;

        return (
          <motion.div
            key={button.to}
            initial={false}
            className={`rounded-full ${selected && "text-white p-3"}`}
            animate={{
              backgroundColor: selected ? "#2d5586" : "#ffffff",
              transition: { duration: 0.3 },
              opacity: selected ? 1 : 0.3,
              y: selected ? -3 : 0,
            }}
          >
            <Link to={button.to}>{button.icon}</Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
