import type { Response, Request } from 'express';

import { registerService } from '../../services/auth';

export async function registerController(req: Request, res: Response) {
  try {
    const user = await registerService(req.body)

    return res.status(201).json(user)
  } catch (e) {
    return res.status(500).send('Erro no servidor, tente novamente em instantes')
  }
}