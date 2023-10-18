import {stringsUtils} from '@utils';
import {z} from 'zod';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;

export const signUpSchema = z.object({
  username: z.string().regex(userNameRegex, 'username inválido').toLowerCase(),
  firstName: z
    .string()
    .min(2, 'nome muito curto')
    .max(15, 'nome muito longo')
    .transform(stringsUtils.capatatilzeFirstLetter),
  lastName: z
    .string()
    .min(2, 'nome muito curto')
    .max(15, 'nome muito longo')
    .transform(stringsUtils.capatatilzeFirstLetter),
  email: z.string().email('email inválido'),
  password: z.string().min(8, 'Senha deve ter no mínimo 8 caracteres'),
});

export type SignUpSchemaType = z.infer<typeof signUpSchema>;
