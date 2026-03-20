import api from '../connection'

import type { AppointmentsDashboard } from '../../types/Appointments.type'

export async function getAppointments(id: string): Promise<AppointmentsDashboard[]> {
  const { data } = await api.get(`/appointments/${id}`)

  return data
}