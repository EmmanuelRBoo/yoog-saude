import type { Response, Request } from 'express';
import { updateAppointmentService } from '../../services/appointments';

export async function updateAppointmentController(req: Request, res: Response) {
  try {
    await updateAppointmentService(req.params.id as string)

    return res.status(200).send('Atendimento atualizado com sucesso')
  } catch (e) {
    return res.status(500).send('Erro no servidor, tente novamente em instantes')
  }
}