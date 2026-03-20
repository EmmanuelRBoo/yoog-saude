import api from '../connection'

import type { Login } from './types'

export async function login(params: Login) {
  const { data } = await api.post('/auth/login', params)

  return data
}