import api from '../connection'

export async function removeAppointment(id: string) {
  const { data } = await api.delete(`/appointments/${id}`)

  return data
}