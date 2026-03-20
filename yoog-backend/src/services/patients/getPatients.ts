import { decode } from '../../utils'
import { getPatients } from '../../models/patients'

export async function getPatientsService(token: string) {
  const patients = await getPatients(decode(token).id)

  return patients
}