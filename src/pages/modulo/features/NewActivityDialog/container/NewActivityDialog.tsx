import { Dialog, DialogContent } from '@/components/ui/dialog';
import { FormProvider } from 'react-hook-form';
import { Header } from '../components/Header';
import { Form } from '../components/Form';
import { useNewActivityDialog } from '../hooks/useNewActivityDialog';

type NewActivityDialogProps = {
  openActivityDialog: boolean;
  setOpenActivityDialog: (open: boolean) => void;
};

export const NewActivityDialog = ({
  openActivityDialog,
  setOpenActivityDialog,
}: NewActivityDialogProps) => {
  const { methods, handleNewActivity } = useNewActivityDialog();

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
