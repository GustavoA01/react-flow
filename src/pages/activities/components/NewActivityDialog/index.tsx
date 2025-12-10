import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  newActivitySchema,
  type NewActivityFormType,
} from "@/data/schemas/activities";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { Form } from "./Form";

type NewActivityDialogProps = {
  openActivityDialog: boolean;
  setOpenActivityDialog: (open: boolean) => void;
};

export const NewActivityDialog = ({
  openActivityDialog,
  setOpenActivityDialog,
}: NewActivityDialogProps) => {
  const navigate = useNavigate();

  const methods = useForm<NewActivityFormType>({
    resolver: zodResolver(newActivitySchema),
  });

  const handleNewActivity = (data: NewActivityFormType) => {
    const activityData = {
      activityName: data.activityName,
      qtdQuestions: data.qtdQuestions,
    };

    const oldActivityData = localStorage.getItem("newActivityData");
    if (oldActivityData) {
      localStorage.removeItem("newActivityData");
    }

    localStorage.setItem("newActivityData", JSON.stringify(activityData));
    navigate("/cursos/curso/atividades/nova-atividade");
  };

  return (
    <Dialog open={openActivityDialog} onOpenChange={setOpenActivityDialog}>
      <DialogContent>
        <Header />

        <FormProvider {...methods}>
          <Form onSubmit={methods.handleSubmit(handleNewActivity)} />
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};
