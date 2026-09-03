import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useForm } from 'react-hook-form';
import { ChatForm } from '../components/ChatForm';

const ChatFormHarness = ({
  isLoading = false,
  onSubmit = jest.fn((event: React.FormEvent<HTMLFormElement>) =>
    event.preventDefault()
  ),
  handleOnKeyDown = jest.fn(),
}: {
  isLoading?: boolean;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  handleOnKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
}) => {
  const { register } = useForm<{ message: string }>({
    defaultValues: { message: '' },
  });

  return (
    <ChatForm
      onSubmit={onSubmit}
      register={register}
      isLoading={isLoading}
      handleOnKeyDown={handleOnKeyDown}
    />
  );
};

const submitButton = () =>
  screen
    .getByPlaceholderText(/Crie perguntas|Aguarde/)
    .closest('form')
    ?.querySelector('button[type="submit"]') as HTMLButtonElement;

describe('ChatForm', () => {
  it('shows the idle placeholder and submits the form', async () => {
    const user = userEvent.setup();
    const onSubmit = jest.fn((event: React.FormEvent<HTMLFormElement>) =>
      event.preventDefault()
    );

    render(<ChatFormHarness onSubmit={onSubmit} />);

    expect(
      screen.getByPlaceholderText('Crie perguntas de três níveis sobre...')
    ).toBeInTheDocument();

    await user.click(submitButton());

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('disables the field while loading', () => {
    render(<ChatFormHarness isLoading />);

    expect(screen.getByPlaceholderText('Aguarde a resposta...')).toBeDisabled();
    expect(submitButton()).toBeDisabled();
    expect(screen.getByRole('status', { name: 'Loading' })).toBeInTheDocument();
  });

  it('forwards Enter on the textarea', async () => {
    const user = userEvent.setup();
    const handleOnKeyDown = jest.fn();

    render(<ChatFormHarness handleOnKeyDown={handleOnKeyDown} />);

    await user.type(
      screen.getByPlaceholderText('Crie perguntas de três níveis sobre...'),
      'oi{Enter}'
    );

    expect(handleOnKeyDown).toHaveBeenCalled();
  });
});
