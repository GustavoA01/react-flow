import { cn } from '@/lib/utils';
import type { ComponentProps } from 'react';
import type {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';
import { ErrorFormMessage } from './ErrorFormMessage';
import { Input } from './ui/input';
import { Label } from './ui/label';

type LabelInputProps<T extends FieldValues> = {
  label: string;
  id: Path<T>;
  error?: string;
  register: UseFormRegister<T>;
  registerOptions?: RegisterOptions<T, Path<T>>;
} & Omit<ComponentProps<typeof Input>, 'id'>;

export const LabelInput = <T extends FieldValues>({
  label,
  id,
  error,
  register,
  className,
  registerOptions,
  ...props
}: LabelInputProps<T>) => (
  <div>
    <Label htmlFor={id}>{label}</Label>
    <Input
      id={id}
      {...props}
      className={cn('mt-1.5', className)}
      {...register(id, registerOptions)}
    />
    {error && <ErrorFormMessage message={error} />}
  </div>
);
