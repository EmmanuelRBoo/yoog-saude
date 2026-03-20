import type { Response, Request } from 'express';
import { createPatientService } from '../../services/patients';

export async function createPatientController(req: Request, res: Response) {
  try {
    await createPatientService(req.body)

    return res.status(201).send('Paciente cadastrado')
  } catch (e) {
    return res.status(500).send('Erro no servidor, tente novamente em instantes')
  }
}