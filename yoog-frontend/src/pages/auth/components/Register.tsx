import { type SubmitEvent, useContext } from 'react'
import { useNavigate } from 'react-router'

import { register } from '../../../api/auth'

import { Input, Button } from '../../../components'
import { AuthContext } from '../../../providers/AuthProvider'
import { GlobalContext } from '../../../providers/GlobalProvider'

export function Register() {
  const { setPage } = useContext(AuthContext)
  const { setUser, notify } = useContext(GlobalContext)

  const router = useNavigate()

  const onSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = new FormData(event.currentTarget)

    const res = Object.fromEntries(data.entries())

    register(res as { email: string, name: string, tel: string, password: string })
      .then(res => {
        localStorage.setItem('token', res.token)
        setUser!(res)
        router('/pacientes')
      })
      .catch(() => notify!('Usuário inválido ou já cadastrado'))
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
        label='Nome completo'
        name='name'
      />

      <Input
        label='Telefone'
        name='tel'
        mask='(00) 00000-0000'
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
        Cadastrar
      </Button>

      <small onClick={() => setPage!('LOGIN')} className='form-link'>
        Já possuí cadastro? Faça login
      </small>
    </form >
  )
}