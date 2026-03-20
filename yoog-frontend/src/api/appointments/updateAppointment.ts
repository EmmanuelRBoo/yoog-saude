import api from '../connection'

export async function updateAppointment(id: string) {
  const { data } = await api.put(`/appointments/${id}`)

  return data
}