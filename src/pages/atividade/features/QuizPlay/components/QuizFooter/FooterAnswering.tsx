import { Button } from '@/components/ui/button';
import type { QuizFooterPropsType } from '../../types';

export const FooterAnswering = ({ canCheck, onCheck }: QuizFooterPropsType) => (
  <div className="border-t bg-white px-4 py-4 sm:px-8">
    <div className="container mx-auto">
      <Button
        size="lg"
        className="h-12 w-full text-base font-bold"
        disabled={!canCheck}
        onClick={onCheck}
      >
        Enviar resposta
      </Button>
    </div>
  </div>
);
