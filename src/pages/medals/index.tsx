import { CircleQuestionMark } from "lucide-react";

export const MedalsPage = () => {
  return (
    <div className="container mx-auto mt-8 px-4 sm:px-8 flex flex-col items-center">
      <h1 className="font-semibold font-montserrat text-lg text-zinc-800">
        Veja suas conquistas e selecione uma medalha como foto de perfil!
      </h1>

      <div className="mt-8 flex flex-wrap gap-4 self-center">
        {[...Array(10)].map((_, i) => (
          <button>
            <CircleQuestionMark
              key={i}
              className="w-15 h-15 text-zinc-400 hover:text-red-500 transition-colors duration-300"
            />
            <p className="text-muted-foreground text-center text-sm">20 xp</p>
          </button>
        ))}
      </div>
    </div>
  );
};
