import type { Response, Request } from 'express';
import { createAppointmentService } from '../../services/appointments';

export async function createAppointmentController(req: Request, res: Response) {
  try {
    await createAppointmentService(req.headers.authorization as string, req.params.id as string)

    return res.status(201).send('Atendimento criado com sucesso')
  } catch (e) {
    return res.status(500).send('Erro no servidor, tente novamente em instantes')
  }
}