import type { TableColumns } from '../../components/Table/types'
import type { AppointmentsDashboard } from '../../types/Appointments.type'

const status: { [name: string]: string } = {
  "AGUARDANDO": 'Aguardando',
  "EM_ANDAMENTO": 'Em Andamento',
  "FINALIZADO": 'Finalizado'
}

export const appointmentsColumns = [
  {
    key: 'code',
    title: 'Chave do atendimento'
  },
  {
    key: 'status',
    title: 'Status',
    render: (v) => <span>{status[v]}</span>
  },
  {
    key: 'createdAt',
    title: 'Data de início'
  }
] satisfies TableColumns<AppointmentsDashboard>[]