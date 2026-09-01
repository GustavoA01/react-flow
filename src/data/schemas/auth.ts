import { z } from 'zod';

export const registerSchema = z
  .object({
    tipo: z.enum(['ALUNO', 'MONITOR']),
    nome: z.string().trim().min(1, 'Informe o nome'),
    apelido: z.string().trim(),
    email: z.string().trim(),
    senha: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
    confirmarSenha: z.string().min(1, 'Confirme a senha'),
  })
  .superRefine((data, ctx) => {
    if (data.senha !== data.confirmarSenha) {
      ctx.addIssue({
        code: 'custom',
        message: 'As senhas não coincidem',
        path: ['confirmarSenha'],
      });
    }

    if (data.tipo === 'ALUNO' && data.apelido.length === 0) {
      ctx.addIssue({
        code: 'custom',
        message: 'Informe o apelido',
        path: ['apelido'],
      });
    }

    if (data.tipo === 'MONITOR' && !z.email().safeParse(data.email).success) {
      ctx.addIssue({
        code: 'custom',
        message: 'Informe um e-mail válido',
        path: ['email'],
      });
    }
  });

export type RegisterFormType = z.infer<typeof registerSchema>;
export type RegisterRoleType = RegisterFormType['tipo'];
