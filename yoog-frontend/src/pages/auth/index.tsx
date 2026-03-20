import { useContext } from 'react'

import { AuthContext } from '../../providers/AuthProvider'
import { Login, Register } from './components'

import '../../assets/styles/auth.css'

export function AuthPage() {
  const { page } = useContext(AuthContext)

  if (page == 'REGISTER') return <Register />

  return <Login />
}