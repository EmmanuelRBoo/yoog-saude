import { prisma } from '../../utils'

import type { ICreatePatient } from '../../interfaces/patients'

export async function createPatient(data: ICreatePatient) {
  const patient = await prisma.patient.create({ data })

  return patient
}