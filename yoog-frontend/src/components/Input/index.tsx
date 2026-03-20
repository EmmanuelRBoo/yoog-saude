import { IMaskInput } from 'react-imask'

import type { InputProps } from './types'

import './style.css'

export function Input(props: InputProps) {
  return (
    <label
      className='input-container'
      htmlFor={props.name}
    >
      <span>{props.label}</span>
      {
        props.mask
          ? <IMaskInput name={props.name} mask={props.mask} />
          : <input name={props.name} type={props.type || 'text'} />
      }

    </label>
  )
}