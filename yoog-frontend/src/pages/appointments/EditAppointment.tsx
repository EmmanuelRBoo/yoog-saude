import { useContext } from 'react'

import { updateAppointment, removeAppointment } from '../../api';
import { Button, Modal } from '../../components';
import { GlobalContext } from '../../providers/GlobalProvider'

export function EditAppointment({ show, setShow, status, id, callback }: { show: boolean, setShow: (v: boolean) => void, status: string, id: string, callback: () => void }) {
  const { notify } = useContext(GlobalContext)

  const toggle = () => setShow(!show)

  const onUpdate = () => {
    updateAppointment(id as string)
      .then(() => {
        notify!('Status atualizado com sucesso')
        callback()
      })
      .finally(toggle)
  }

  const onRemove = () => {
    removeAppointment(id as string)
      .then(() => {
        notify!('Atendimento removido com sucesso')
        callback()
      })
      .finally(toggle)
  }

  const renderStatus = () => {
    if (status == 'AGUARDANDO') return 'Em andamento'
    if (status == 'EM_ANDAMENTO') return 'Finalizado'

    return null
  }

  return (
    <Modal
      title='Atualizar Status'
      onSubmit={() => { }}
      onCancel={toggle}
      showFooter={false}
    >
      {
        renderStatus()
          ? <p>Deseja atualizar o status para "{renderStatus()}" ou deletar este atendimento?</p>
          : <p>Deseja deletar este atendimento?</p>
      }


      <div className='edit-buttons'>
        {
          renderStatus() && (<Button onClick={onUpdate}>Alterar Status</Button>)
        }

        <Button variant='danger' onClick={onRemove}>Deletar</Button>
      </div>
    </Modal>
  )
}