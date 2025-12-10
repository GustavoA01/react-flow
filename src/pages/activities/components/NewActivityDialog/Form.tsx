import { ErrorFormMessage } from "@/components/ErrorFormMessage";
import { Input } from "@/components/ui/input";
import { Footer } from "./Footer";
import { useFormContext } from "react-hook-form";
import { type NewActivityFormType } from "@/data/schemas/activities";

type FormProps = {
  onSubmit: () => void;
};

export const Form = ({ onSubmit }: FormProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<NewActivityFormType>();

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div className="space-y-3">
        <div>
          <Input
            {...register("activityName")}
            placeholder="Nome da atividade"
            className="placeholder:max-sm:text-sm"
          />

          {errors.activityName && (
            <ErrorFormMessage message={errors.activityName.message!} />
          )}
        </div>

        <div>
          <Input
            placeholder="Max: 5"
            type="number"
            className="placeholder:max-sm:text-sm"
            {...register("qtdQuestions", {
              setValueAs: (value) => Number(value),
            })}
          />

          {errors.qtdQuestions && (
            <ErrorFormMessage message={errors.qtdQuestions.message!} />
          )}
        </div>
      </div>

      <Footer />
    </form>
  );
};
