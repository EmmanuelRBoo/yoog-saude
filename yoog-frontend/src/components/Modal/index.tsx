import { type SubmitEvent } from 'react'
import { XIcon } from '@phosphor-icons/react'

import { Button } from '../Button'
import type { ModalProps } from './types'

import './style.css'

export function Modal(props: ModalProps) {
  const onSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = new FormData(event.currentTarget)

    const res = Object.fromEntries(data.entries())

    props.onSubmit(res)
  }

  return (
    <div
      onClick={(e) => {
        e.stopPropagation()
        props.onCancel()
      }}
      className='modal-container'
    >
      <div onClick={(e) => e.stopPropagation()} className='modal-content'>
        <div className='modal-header'>
          <h2>{props.title}</h2>

          <XIcon
            size={26}
            weight='bold'
            cursor='pointer'
            onClick={props.onCancel}
          />
        </div>

        <div className='modal-body'>
          <form onSubmit={onSubmit}>
            {props.children}
          </form>
        </div>

        {
          props.showFooter != false && (
            <div className='modal-footer'>
              <Button
                variant='danger'
                onClick={props.onCancel}
              >
                Cancelar
              </Button>

              <Button
                variant='success'
                type='submit'
              >
                Salvar
              </Button>
            </div>
          )
        }
      </div>
    </div>
  )
}