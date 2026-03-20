import api from '../connection'

import type { CreatePatient } from '../../types/Patients.type'

export async function createPatient(params: CreatePatient) {
  const { data } = await api.post('/patients', params)

  return data
}