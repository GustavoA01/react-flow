import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AddMedalDialog } from '../components/AddMedalDialog';
import { uploadImage } from '@/services/cloudinary';
import { toast } from '@/components/ui/toast';

jest.mock('@/services/cloudinary', () => ({
  uploadImage: jest.fn(),
}));

jest.mock('@/components/ui/toast', () => ({
  toast: { add: jest.fn() },
}));

const mockedUploadImage = uploadImage as jest.MockedFunction<
  typeof uploadImage
>;
const mockedToastAdd = toast.add as jest.MockedFunction<typeof toast.add>;

describe('AddMedalDialog', () => {
  const file = new File(['medalha'], 'medalha.png', { type: 'image/png' });

  beforeEach(() => {
    mockedUploadImage.mockReset();
    mockedToastAdd.mockReset();
  });

  it('mostra o formulário quando aberto', () => {
    render(<AddMedalDialog open onOpenChange={jest.fn()} />);

    expect(
      screen.getByRole('heading', { name: 'Adicionar medalha' })
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Nome')).toBeInTheDocument();
    expect(screen.getByLabelText('Pontos mínimos')).toBeInTheDocument();
    expect(screen.getByLabelText('Imagem')).toBeInTheDocument();
  });

  it('não renderiza o conteúdo quando fechado', () => {
    render(<AddMedalDialog open={false} onOpenChange={jest.fn()} />);

    expect(
      screen.queryByRole('heading', { name: 'Adicionar medalha' })
    ).not.toBeInTheDocument();
  });

  it('valida nome e imagem obrigatórios', async () => {
    const user = userEvent.setup();

    render(<AddMedalDialog open onOpenChange={jest.fn()} />);

    await user.click(screen.getByRole('button', { name: 'Adicionar' }));

    expect(
      await screen.findByText('Informe o nome da medalha')
    ).toBeInTheDocument();
    expect(screen.getByText('Selecione uma imagem')).toBeInTheDocument();
    expect(mockedUploadImage).not.toHaveBeenCalled();
  });

  it('fecha ao cancelar', async () => {
    const user = userEvent.setup();
    const onOpenChange = jest.fn();

    render(<AddMedalDialog open onOpenChange={onOpenChange} />);

    await user.click(screen.getByRole('button', { name: 'Cancelar' }));
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it('envia a imagem ao Cloudinary ao cadastrar a medalha', async () => {
    const user = userEvent.setup();
    const onOpenChange = jest.fn();
    mockedUploadImage.mockResolvedValue(
      'https://res.cloudinary.com/nome-cloud-ficticio/image/upload/medalha.png'
    );
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    render(<AddMedalDialog open onOpenChange={onOpenChange} />);

    await user.type(screen.getByLabelText('Nome'), 'PUC Minas');
    await user.upload(screen.getByLabelText('Imagem'), file);
    await user.click(screen.getByRole('button', { name: 'Adicionar' }));

    await waitFor(() => {
      expect(mockedUploadImage).toHaveBeenCalledWith(file);
    });
    expect(logSpy).toHaveBeenCalledWith({
      nome: 'PUC Minas',
      pontosMin: 0,
      imagemUrl:
        'https://res.cloudinary.com/nome-cloud-ficticio/image/upload/medalha.png',
    });
    expect(mockedToastAdd).toHaveBeenCalledWith({
      type: 'success',
      title: 'Medalha adicionada',
    });
    expect(onOpenChange).toHaveBeenCalledWith(false);

    logSpy.mockRestore();
  });

  it('mostra erro quando o envio da imagem falha', async () => {
    const user = userEvent.setup();
    const onOpenChange = jest.fn();
    mockedUploadImage.mockRejectedValue(new Error('Falha ao enviar a imagem'));
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    render(<AddMedalDialog open onOpenChange={onOpenChange} />);

    await user.type(screen.getByLabelText('Nome'), 'PUC Minas');
    await user.upload(screen.getByLabelText('Imagem'), file);
    await user.click(screen.getByRole('button', { name: 'Adicionar' }));

    expect(
      await screen.findByText(
        'Não foi possível enviar a imagem. Tente de novo.'
      )
    ).toBeInTheDocument();
    expect(mockedToastAdd).toHaveBeenCalledWith({
      type: 'error',
      title: 'Não foi possível enviar a imagem.',
    });
    expect(onOpenChange).not.toHaveBeenCalledWith(false);

    errorSpy.mockRestore();
  });
});
