import { Plus } from 'lucide-react';
import { Button } from './ui/button';
import type { NewButtonProps } from '@/data/types/components';

export const NewButtonFloat = ({ text, onClick }: NewButtonProps) => (
  <Button
    onClick={onClick}
    className="max-sm:fixed max-sm:rounded-full max-sm:w-12 max-sm:h-12 max-sm:z-10 bottom-10 right-5"
  >
    <p className="hidden sm:block">{text}</p>{' '}
    <Plus className="sm:hidden rounded-full" />
  </Button>
);
