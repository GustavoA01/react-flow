import { Button } from '@/components/ui/button';

type EnterAsButtonsPropsType = {
  isAluno: boolean;
  onEnterAsStudent: () => void;
  onEnterAsMonitor: () => void;
};

export const EnterAsButtons = ({
  isAluno,
  onEnterAsStudent,
  onEnterAsMonitor,
}: EnterAsButtonsPropsType) => (
  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
    <Button
      type="button"
      variant={isAluno ? 'default' : 'outline'}
      className="font-montserrat"
      onClick={onEnterAsStudent}
    >
      Entrar como aluno
    </Button>
    <Button
      type="button"
      variant={!isAluno ? 'default' : 'outline'}
      className="font-montserrat"
      onClick={onEnterAsMonitor}
    >
      Entrar como monitor
    </Button>
  </div>
);
