import type { TableColumns } from '../../components/Table/types'
import type { PatientsDashboard } from '../../types/Patients.type'

export const patientColumns = [
  {
    key: 'name',
    title: 'Paciente'
  },
  {
    key: 'tel',
    title: 'Telefone'
  },
  {
    key: 'appointments',
    title: 'Consultas'
  },
  {
    key: 'lastAppointment',
    title: 'Última consulta'
  }
] satisfies TableColumns<PatientsDashboard>[]