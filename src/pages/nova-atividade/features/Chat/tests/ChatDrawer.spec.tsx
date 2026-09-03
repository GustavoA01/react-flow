import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FormProvider, useForm } from 'react-hook-form';
import { ChatDrawer } from '../container/ChatDrawer';
import type { QuestionFormType } from '@/data/schemas/activity';

jest.mock('react-markdown', () => ({
  __esModule: true,
  default: ({ children }: { children?: string }) => <div>{children}</div>,
}));

jest.mock('@/hooks/useMediaDevice', () => ({
  useMediaDevice: () => ({ isDesktop: true, containerClassName: '' }),
}));

jest.mock('@/services/googleConfig', () => ({
  generateContent: jest.fn(),
}));

const DrawerHarness = () => {
  const methods = useForm<QuestionFormType>({
    defaultValues: { questions: [] },
  });

  return (
    <FormProvider {...methods}>
      <ChatDrawer />
    </FormProvider>
  );
};

describe('ChatDrawer', () => {
  it('opens the chat from the trigger', async () => {
    const user = userEvent.setup();
    render(<DrawerHarness />);

    expect(screen.queryByText('Gerador de atividades')).not.toBeInTheDocument();

    await user.click(screen.getByRole('button'));

    expect(
      await screen.findByText('Gerador de atividades')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Peça perguntas para o gerador de atividades')
    ).toBeInTheDocument();
  });
});
