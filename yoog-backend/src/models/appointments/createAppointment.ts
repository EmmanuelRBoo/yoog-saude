import { prisma } from '../../utils'

import type { ICreateAppointment } from '../../interfaces/appointments'

export async function createAppointment(data: ICreateAppointment) {
  const appointments = await prisma.appointment.create({ data })

  return appointments
}