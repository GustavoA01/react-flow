import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const FormFooter = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col sm:flex-row w-full sm:justify-end gap-2">
      <Button
        type="button"
        className="max-sm:hidden"
        variant="outline"
        onClick={() => navigate(-1)}
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
        onClick={() => navigate(-1)}
      >
        Cancelar
      </Button>
    </div>
  );
};
