import { prisma } from '../../utils'

function newStatus(status: string) {
  if (status == 'AGUARDANDO') return 'EM_ANDAMENTO'
  if (status == 'EM_ANDAMENTO') return 'FINALIZADO'
}

export async function updateAppointment(id: string) {
  const appointment = await prisma.$transaction(async (t) => {
    const appointment = await t.appointment.findUnique({ where: { id }, select: { status: true }})

    if (appointment?.status == 'FINALIZADO') return null

    if (appointment) {
      await t.appointment.update({
      where: { id },
      data: {
        status: newStatus(appointment.status)
      }
    })
    }
  })

  return appointment
}