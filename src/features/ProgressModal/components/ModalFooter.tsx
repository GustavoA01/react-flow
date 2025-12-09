import { DialogClose } from "@/components/ui/dialog";

export const ModalFooter = ({ concluded }: { concluded: boolean }) => {
  return (
    <>
      <p className="mt-8 mb-8 text-zinc-500 font-medium font-fredoka text-center">
        {concluded
          ? "Parabéns! Você concluiu a fase com sucesso!"
          : "Você está indo bem! Continue fazendo as atividades da disciplina para preencher a barra e liberar o próximo nível."}
      </p>

      <DialogClose
        className={`flex font-fredoka justify-center mx-auto font-medium py-4 rounded-md w-40 border bg-cyan-50 hover:bg-zinc-100`}
      >
        {concluded ? "Legal!" : "Continuar"}
      </DialogClose>
    </>
  );
};
