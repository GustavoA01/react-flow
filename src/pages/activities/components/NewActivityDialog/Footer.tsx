import { Button } from "@/components/ui/button";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";

export const Footer = () => (
  <DialogFooter>
    <DialogClose asChild>
      <Button variant="outline">Cancelar</Button>
    </DialogClose>

    <Button type="submit">
      <p>Continuar</p>
      <ArrowRight className="hidden sm:block" />
    </Button>
  </DialogFooter>
);
