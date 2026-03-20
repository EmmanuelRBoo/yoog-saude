import type { Response, Request } from 'express';
import { getAppointmentsService } from '../../services/appointments';

export async function getAppointmentsController(req: Request, res: Response) {
  try {
    const appointments = await getAppointmentsService(req.params.id as string)

    return res.status(200).json(appointments)
  } catch (e) {
    return res.status(500).send('Erro no servidor, tente novamente em instantes')
  }
}