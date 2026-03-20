import type { Response, Request } from 'express';
import { removeAppointmentService } from '../../services/appointments';

export async function removeAppointmentController(req: Request, res: Response) {
  try {
    await removeAppointmentService(req.params.id as string)

    return res.status(204).send('Atendimento deletado com sucesso')
  } catch (e) {
    return res.status(500).send('Erro no servidor, tente novamente em instantes')
  }
}