import { useState, useContext } from 'react'

import { createPatient } from '../../api'
import { GlobalContext } from '../../providers/GlobalProvider'
import { Button, Input, Modal } from '../../components'
import type { CreatePatient } from '../../types/Patients.type'

export function AddPatient({ callback }: { callback: () => void }) {
  const [show, setShow] = useState<boolean>(false)

  const { notify } = useContext(GlobalContext)

  const toggle = () => setShow(s => !s)

  const submit = (data: CreatePatient) => {
    createPatient(data)
      .then(() => {
        notify!('Paciente adicionado com sucesso')
        callback()
      })
      .finally(toggle)
  }

  return (
    <>
      <Button
        align='right'
        onClick={toggle}
      >
        Adicionar novo paciente
      </Button>

      {
        show && (
          <Modal
            title='Adicionar Paciente'
            onSubmit={(v) => submit(v as CreatePatient)}
            onCancel={toggle}
          >
            <>
              <Input
                label='Nome'
                name='name'
              />

              <Input
                label='Telefone'
                name='tel'
                mask='(00) 00000-0000'
              />
            </>
          </Modal>
        )
      }
    </>
  )
}