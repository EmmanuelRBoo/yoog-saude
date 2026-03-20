export type AppointmentsDashboard = {
  id: string
  code: string
  status: 'AGUARDANDO' | 'EM_ANDAMENTO' | 'FINALIZADO'
  createdAt: string
}