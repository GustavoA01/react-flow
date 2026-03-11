import Espadas from "@/assets/Espadas.jpg";
import { Card, CardContent } from "@/components/ui/card";

export const WonMedal = () => (
  <Card className="group cursor-pointer hover:scale-105 hover:shadow-primary transition-all duration-300">
    <CardContent className="space-y-2 select-none">
      <img
        src={Espadas}
        alt="Espadas"
        className="w-20 h-20 sm:w-15 sm:h-15 rounded-full ring-2 ring-green-500 group-hover:ring-primary group-hover:-translate-y-1 transition-all duration-300"
      />
      <p className="text-center text-zinc-800 font-semibold font-montserrat">
        Gato
      </p>
      <p className="text-muted-foreground text-center text-sm">20 xp</p>
    </CardContent>
  </Card>
);
