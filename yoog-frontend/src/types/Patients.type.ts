export type PatientsDashboard = {
  id: string
  name: string
  tel: string
  appointments: number
  lastAppointment: string
}

export type CreatePatient = {
  name: string
  tel: string
}