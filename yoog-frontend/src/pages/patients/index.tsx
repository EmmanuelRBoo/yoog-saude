import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

import { getPatients } from '../../api'
import { Table } from '../../components'
import type { PatientsDashboard } from '../../types/Patients.type'

import { AddPatient } from './AddPatient'
import { patientColumns } from './patientsColumns'

export function PatientsPage() {
  const [patients, setPatients] = useState<PatientsDashboard[]>([])

  const route = useNavigate()

  const handlePatients = () => {
    getPatients()
      .then(setPatients)
  }

  useEffect(() => {
    handlePatients()
  }, [])

  return (
    <section className='section-container'>
      <h1>Seus pacientes</h1>

      <small>Clique em um paciente para ver seus atendimentos</small>

      <AddPatient callback={handlePatients} />

      <Table
        data={patients}
        columns={patientColumns}
        onClickCell={(p) => route(`/paciente/${p.id}`)}
      />
    </section>
  )
}