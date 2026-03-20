import type { ButtonProps } from './types'

import './style.css'

export function Button(props: ButtonProps) {
  const click = () => {
    if (props.loading || props.disable) return null

    props.onClick && props.onClick()
  }

  return (
    <button
      className={`
        button-container 
        button-${props.variant || 'default'} 
        ${props.align ? `button-${props.align}` : ''}
      `}
      type={props.type || 'button'}
      onClick={click}
      disabled={props.disable || props.loading}
    >
      {
        props.loading
          ? 'Carregando...'
          : props.children
      }
    </button>
  )
}