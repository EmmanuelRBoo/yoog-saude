import { login } from '../../models/auth'
import type { ILogin } from '../../interfaces/auth';

export async function loginService(data: ILogin) {
  const user = await login(data)

  if (!user.id) {
    throw new Error('Credenciais incorretas ou usuário inexistente')
  }

  return user
}