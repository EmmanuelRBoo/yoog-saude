import api from '../connection'

import type { Register } from './types'

export async function register(params: Register) {
  const { data } = await api.post('/auth/register', params)

  return data
}