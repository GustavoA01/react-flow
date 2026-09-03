import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ChatContent } from '../components/ChatContent';
import type { ChatMessageType } from '../hooks/useChat';
import type { QuestionFormType } from '@/data/schemas/activity';

jest.mock('react-markdown', () => ({
  __esModule: true,
  default: ({ children }: { children?: string }) => <div>{children}</div>,
}));

const question = (
  statement: string
): QuestionFormType['questions'][number] => ({
  statement,
  xp: 1,
  alternatives: [
    { text: 'Certa', isCorrect: true },
    { text: 'Errada', isCorrect: false },
    { text: 'ignore', isCorrect: false },
    { text: 'ignore', isCorrect: false },
  ],
});

const renderContent = ({
  messages = [],
  isLoading = false,
  formFull = false,
  isQuestionApplied = () => false,
  onApplyQuestion = jest.fn(),
  onApplyAllQuestions = jest.fn(),
}: {
  messages?: ChatMessageType[];
  isLoading?: boolean;
  formFull?: boolean;
  isQuestionApplied?: (messageIndex: number, questionIndex: number) => boolean;
  onApplyQuestion?: () => void;
  onApplyAllQuestions?: () => void;
} = {}) =>
  render(
    <ChatContent
      messages={messages}
      isLoading={isLoading}
      formFull={formFull}
      isQuestionApplied={isQuestionApplied}
      onApplyQuestion={onApplyQuestion}
      onApplyAllQuestions={onApplyAllQuestions}
    />
  );

describe('ChatContent', () => {
  it('shows the empty state when there are no messages', () => {
    renderContent();

    expect(
      screen.getByText('Peça perguntas para o gerador de atividades')
    ).toBeInTheDocument();
  });

  it('shows user and assistant messages', () => {
    renderContent({
      messages: [
        { role: 'user', content: 'Crie 1 pergunta sobre listas' },
        { role: 'assistant', content: 'Não consegui organizar as perguntas.' },
      ],
    });

    expect(
      screen.getByText('Crie 1 pergunta sobre listas')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Não consegui organizar as perguntas.')
    ).toBeInTheDocument();
    expect(
      screen.queryByText('Peça perguntas para o gerador de atividades')
    ).not.toBeInTheDocument();
  });

  it('applies a generated question', async () => {
    const user = userEvent.setup();
    const onApplyQuestion = jest.fn();
    const generated = question('O que é uma lista?');

    renderContent({
      messages: [
        {
          role: 'assistant',
          content: 'perguntas',
          questions: [generated],
        },
      ],
      onApplyQuestion,
    });

    expect(screen.getByText(/O que é uma lista/)).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: 'Adicionar todas' })
    ).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Adicionar' }));

    expect(onApplyQuestion).toHaveBeenCalledWith(generated, 0, 0);
  });

  it('applies every generated question', async () => {
    const user = userEvent.setup();
    const onApplyAllQuestions = jest.fn();
    const questions = [question('Pergunta A'), question('Pergunta B')];

    renderContent({
      messages: [{ role: 'assistant', content: 'perguntas', questions }],
      onApplyAllQuestions,
    });

    await user.click(screen.getByRole('button', { name: 'Adicionar todas' }));

    expect(onApplyAllQuestions).toHaveBeenCalledWith(questions, 0);
  });

  it('disables apply actions when the form is full or already applied', () => {
    renderContent({
      messages: [
        {
          role: 'assistant',
          content: 'perguntas',
          questions: [question('Pergunta A'), question('Pergunta B')],
        },
      ],
      formFull: true,
      isQuestionApplied: () => true,
    });

    expect(screen.getByRole('button', { name: 'Adicionadas' })).toBeDisabled();
    expect(screen.getAllByRole('button', { name: 'Adicionada' })).toHaveLength(
      2
    );
    expect(
      screen.getAllByRole('button', { name: 'Adicionada' })[0]
    ).toBeDisabled();
  });

  it('shows the loading placeholder', () => {
    renderContent({ isLoading: true });

    expect(screen.getByText('Gerando resposta...')).toBeInTheDocument();
  });
});
