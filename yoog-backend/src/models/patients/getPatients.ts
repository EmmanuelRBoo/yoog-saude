import { prisma } from '../../utils'

export async function getPatients(userId: string) {
  const patients = await prisma.patient.findMany({
    where: {
      appointments: {
        some: {
          userId: userId,
        },
      },
    },
    select: {
      id: true,
      name: true,
      tel: true,
      _count: {
        select: {
          appointments: {
            where: {
              userId: userId,
            },
          },
        },
      },
      appointments: {
        where: { userId },
        orderBy: {
          updatedAt: 'desc',
        },
        take: 1,
        select: {
          updatedAt: true,
        },
      },
    },
  })

  const formatted = patients.map(p => ({
    id: p.id,
    name: p.name,
    tel: p.tel,
    appointments: p._count.appointments,
    lastAppointment: p.appointments[0]?.updatedAt ?? null,
  }))

  return formatted
}