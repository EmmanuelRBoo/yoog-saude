import { useState, useContext } from 'react'
import { DoorOpenIcon } from '@phosphor-icons/react'

import { GlobalContext } from '../../providers/GlobalProvider'
import { CaretCircleUpIcon, CaretCircleDownIcon, UserCircleIcon } from '@phosphor-icons/react'

import './style.css'

export function Header() {
  const [open, setOpen] = useState<boolean>(false)

  const { logOut } = useContext(GlobalContext)

  const toggle = () => setOpen(o => !o)

  return (
    <header className='header-container'>
      <div
        className='header-content'
        onClick={toggle}
      >
        <UserCircleIcon
          size={32}
        />

        nome

        {
          open
            ? <CaretCircleUpIcon size={18} />
            : <CaretCircleDownIcon size={18} />
        }

        {
          open && (
            <ul className='header-nav'>
              <li onClick={logOut}>
                <DoorOpenIcon size={20} />
                <span>Desconectar</span>
              </li>
            </ul>
          )
        }
      </div>
    </header>
  )
}