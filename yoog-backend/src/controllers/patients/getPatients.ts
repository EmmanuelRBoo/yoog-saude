import type { Response, Request } from 'express';
import { getPatientsService } from '../../services/patients';

export async function getPatientsController(req: Request, res: Response) {
  try {
    const patients = await getPatientsService(req.headers.authorization as string)

    return res.status(200).json(patients)
  } catch (e) {
    return res.status(500).send('Erro no servidor, tente novamente em instantes')
  }
}