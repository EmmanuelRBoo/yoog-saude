import { prisma } from '../../utils'

export async function getAppointments(id: string) {
  const appointments = await prisma.appointment.findMany({
    where: {
      patientId: id
    },
    select: {
      code: true,
      createdAt: true,
      status: true
    }
  })

  return appointments
}