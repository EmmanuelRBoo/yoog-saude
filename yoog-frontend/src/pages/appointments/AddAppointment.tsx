import { useContext, useState } from 'react'
import { useParams } from 'react-router'

import { createAppointment } from '../../api'
import { Button, Modal } from '../../components'
import { GlobalContext } from '../../providers/GlobalProvider'

export function AddAppointment({ callback }: { callback: () => void }) {
  const [show, setShow] = useState<boolean>(false)

  const { notify } = useContext(GlobalContext)

  const { id } = useParams()

  const toggle = () => setShow(s => !s)

  const submit = () => {
    createAppointment(id as string)
      .then(() => {
        notify!('Atendimento adicionado com sucesso')
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
        Adicionar novo atendimento
      </Button>

      {
        show && (
          <Modal
            title='Adicionar atendimento'
            onSubmit={submit}
            onCancel={toggle}
          >
            <p>Deseja adicionar um agendamento para este paciente?</p>
          </Modal>
        )
      }
    </>
  )
}