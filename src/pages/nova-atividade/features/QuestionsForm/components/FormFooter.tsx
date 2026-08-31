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
        onClick={goBack}
        variant="outline"
        className="max-sm:hidden"
      >
        Cancelar
      </Button>

      <Button type="submit">
        <Save className="max-sm:hidden" />
        Salvar
      </Button>

      <Button
        type="button"
        onClick={goBack}
        variant="outline"
        className="sm:hidden"
      >
        Cancelar
      </Button>
    </div>
  );
};
