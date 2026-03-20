import { prisma } from '../../utils'

export async function removeAppointment(id: string) {
  const appointment = await prisma.appointment.delete({ where: { id }})

  return appointment
}