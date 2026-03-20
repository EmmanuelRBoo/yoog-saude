import { type SubmitEvent, useContext } from 'react'
import { useNavigate } from 'react-router'

import { login } from '../../../api/auth'

import { Input, Button } from '../../../components'
import { AuthContext } from '../../../providers/AuthProvider'
import { GlobalContext } from '../../../providers/GlobalProvider'

export function Login() {
  const { setPage } = useContext(AuthContext)
  const { setUser, notify } = useContext(GlobalContext)

  const router = useNavigate()

  const onSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = new FormData(event.currentTarget)

    const res = Object.fromEntries(data.entries())

    login(res as { email: string, password: string })
      .then(res => {
        localStorage.setItem('token', res.token)
        setUser!(res)
        router('/pacientes')
      })
      .catch(() => notify!('Usuário inválido'))
  }

  return (
    <form onSubmit={onSubmit} className='login-form'>
      <h1>Yoog Saúde</h1>

      <Input
        label='Email'
        name='email'
        type='email'
      />

      <Input
        label='Senha'
        name='password'
        type='password'
      />

      <Button
        type='submit'
        variant='success'
      >
        Login
      </Button>

      <small onClick={() => setPage!('REGISTER')} className='form-link'>
        Não possuí cadastro? Registre-se
      </small>
    </form >
  )
}