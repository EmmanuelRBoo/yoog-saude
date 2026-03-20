import { register } from '../../models/auth'
import type { IRegister } from '../../interfaces/auth';

export async function registerService(data: IRegister) {
  const user = await register(data)

  if (!user.id) {
    throw new Error('Credenciais incorretas ou usuário inexistente')
  }

  return user
}