import { Button } from "@/components/ui/button";
import { useRouter } from "@tanstack/react-router";
import { Save } from "lucide-react";

export const FormFooter = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col sm:flex-row w-full sm:justify-end gap-2">
      <Button
        type="button"
        className="max-sm:hidden"
        variant="outline"
        onClick={() => router.history.back()}
      >
        Cancelar
      </Button>

      <Button type="submit">
        Salvar
        <Save className="max-sm:hidden" />
      </Button>

      <Button
        type="button"
        className="sm:hidden"
        variant="outline"
        onClick={() => router.history.back()}
      >
        Cancelar
      </Button>
    </div>
  );
};
