import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const Header = () => (
  <DialogHeader>
    <DialogTitle>Nova Atividade</DialogTitle>
    <DialogDescription>
      Defina o nome do quiz e quantas perguntas ele terá.
    </DialogDescription>
  </DialogHeader>
);
