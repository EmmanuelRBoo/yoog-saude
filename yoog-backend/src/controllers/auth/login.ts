import type { Response, Request } from 'express';
import { loginService } from '../../services/auth';

export async function loginController(req: Request, res: Response) {
  try {
    const user = await loginService(req.body)

    return res.status(200).json(user)
  } catch (e) {
    return res.status(401).send('Credenciais incorretas ou usuário inexistente')
  }
}