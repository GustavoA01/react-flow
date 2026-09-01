import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EditDeleteActions } from '@/components/EditDeleteActions';

describe('EditDeleteActions', () => {
  it('calls onEdit and onDelete without propagating the click', async () => {
    const user = userEvent.setup();
    const onEdit = jest.fn();
    const onDelete = jest.fn();
    const onParentClick = jest.fn();

    render(
      <div onClick={onParentClick}>
        <EditDeleteActions
          label="atividade"
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </div>
    );

    await user.click(screen.getByRole('button', { name: 'Editar atividade' }));
    await user.click(screen.getByRole('button', { name: 'Excluir atividade' }));

    expect(onEdit).toHaveBeenCalledTimes(1);
    expect(onDelete).toHaveBeenCalledTimes(1);
    expect(onParentClick).not.toHaveBeenCalled();
  });
});
