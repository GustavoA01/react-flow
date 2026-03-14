import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CircleQuestionMark } from "lucide-react";
import { motion } from "framer-motion";

export const UnknownMedal = () => (
  <Card className="group opacity-70 border-dashed border-2 border-zinc-200 select-none cursor-pointer">
    <CardContent className="flex flex-col flex-1 items-center justify-center gap-2">
      <CircleQuestionMark className="w-20 h-20 sm:w-15 sm:h-15 text-zinc-400 group-hover:text-red-900 transition-colors duration-300" />
      <motion.p
        className="text-2xl font-bold"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #9CA3AF 0%, #10B981 50%, #9CA3AF 100%)",
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        initial={{ backgroundPosition: "100% 0%" }}
        animate={{ backgroundPosition: "-100% 0%" }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
          repeatDelay: 1,
        }}
      >
        ???
      </motion.p>
    </CardContent>
    <CardFooter className="flex justify-center">
      <p className="text-muted-foreground text-center text-sm">20 xp</p>
    </CardFooter>
  </Card>
);
