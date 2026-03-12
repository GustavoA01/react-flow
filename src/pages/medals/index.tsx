import { UnknownMedal } from "./components/UnknownMedal";
import { WonMedal } from "./components/WonMedal";

export const MedalsPage = () => {
  return (
    <div className="container mx-auto mt-8 px-4 sm:px-8 flex flex-col items-center overflow-y-auto custom-bar">
      <h1 className="font-bold font-fredoka text-3xl text-primary-dark">
        Galeria de Medalhas
      </h1>

      <h2 className="font-medium my-4 text-zinc-500">
        Selecione uma medalha alcançada para usar como foto de perfil.
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-4 pb-6 mx-auto">
        <WonMedal />

        {[...Array(14)].map((_, i) => (
          <UnknownMedal key={i} />
        ))}
      </div>
    </div>
  );
};
