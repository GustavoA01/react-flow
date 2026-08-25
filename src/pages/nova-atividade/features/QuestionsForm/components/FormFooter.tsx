import { Button } from '@/components/ui/button';
import { Save } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const FormFooter = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div className="flex flex-col sm:flex-row w-full sm:justify-end gap-2">
      <Button
        type="button"
        variant="outline"
        className="max-sm:hidden"
        onClick={goBack}
      >
        Cancelar
      </Button>

      <Button type="submit">
        Salvar
        <Save className="max-sm:hidden" />
      </Button>

      <Button
        type="button"
        variant="outline"
        className="sm:hidden"
        onClick={goBack}
      >
        Cancelar
      </Button>
    </div>
  );
};
