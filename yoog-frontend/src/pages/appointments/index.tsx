import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { ArrowCircleLeftIcon } from '@phosphor-icons/react'

import { getAppointments } from '../../api'
import { Table } from '../../components'
import type { AppointmentsDashboard } from '../../types/Appointments.type'

import { appointmentsColumns } from './appointmentsColumns'
import { AddAppointment } from './AddAppointment'
import { EditAppointment } from './EditAppointment'

import '../../assets/styles/appointment.css'

export function AppointmentsPage() {
  const [appointments, setAppointments] = useState<AppointmentsDashboard[]>([])
  const [selectedAppointment, setSelectedAppointment] = useState<{ id: string, status: string }>({ id: '', status: '' })
  const [show, setShow] = useState<boolean>(false)

  const { id } = useParams()

  const router = useNavigate()

  const handleAppointments = () => {
    getAppointments(id as string)
      .then(setAppointments)
  }

  useEffect(() => { handleAppointments() }, [])

  return (
    <section className='section-container'>
      <div className='back-button'>
        <ArrowCircleLeftIcon size={24} />

        <span onClick={() => router('/pacientes')}>
          Voltar
        </span>
      </div>

      <h1>Atendimentos</h1>

      <span>Paciente</span>
      <span>Telefone</span>

      <AddAppointment callback={handleAppointments} />

      <Table
        data={appointments}
        columns={appointmentsColumns}
        onClickCell={(cell) => {
          setShow(true)
          setSelectedAppointment(cell)
        }}
      />

      {show && (
        <EditAppointment
          id={selectedAppointment.id}
          status={selectedAppointment.status}
          setShow={setShow}
          show={show}
          callback={handleAppointments}
        />
      )}
    </section>
  )
}