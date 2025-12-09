import { CourseSharedHeader } from "@/components/CourseSharedHeader";
import { DescriptionCircle } from "@/components/DescriptionCircle";
import { NewButtonFloat } from "@/components/ui/NewButtonFloat";
import { Progress } from "@/components/ui/progress";
import { useMediaDevice } from "@/hooks/useMediaDevice";

export const ActivitiesHeader = () => {
  const { paddingXlScreens } = useMediaDevice();

  return (
    <header
      className={`px-4 pt-4 sm:px-8 sm:pt-8 bg-blue-puc rounded-b-4xl pb-10 ${paddingXlScreens}`}
    >
      <CourseSharedHeader />

      <h1 className="font-fredoka text-white font-semibold md:text-4xl text-3xl mt-4 mb-2">
        Derivadas
      </h1>

      <div className="flex justify-between items-center">
        <DescriptionCircle
          left="5 atividades"
          right="195 XP"
          fill="blue-onSurface"
          textColor="blue-onSurface"
        />

        <NewButtonFloat text="Nova Atividade" onClick={() => {}} />
      </div>

      <div className="flex items-center gap-2 mt-5 px-2 py-1 border rounded-full bg-blue-900/50 border-blue-onSurface/30">
        <Progress
          value={40}
          barColor="bg-green-300"
          className="bg-primary-dark"
        />
        <p className="text-xs sm:text-sm text-green-300 font-semibold">40%</p>
      </div>
    </header>
  );
};
