import api from '../connection'

import type { PatientsDashboard } from '../../types/Patients.type'

export async function getPatients(): Promise<PatientsDashboard[]> {
  const { data } = await api.get('/patients')

  return data
}