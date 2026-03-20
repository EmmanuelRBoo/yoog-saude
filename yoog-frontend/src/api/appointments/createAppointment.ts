import api from '../connection'

export async function createAppointment(id: string) {
  const { data } = await api.post(`/appointments/${id}`)

  return data
}