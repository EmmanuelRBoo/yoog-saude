import { decode } from '../../utils'
import { createPatient } from '../../models/patients'
import type { ICreatePatient } from '../../interfaces/patients'

export async function createPatientService(data: ICreatePatient) {
  const patient = await createPatient(data)

  return patient
}