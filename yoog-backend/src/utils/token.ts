import jwt from 'jsonwebtoken'

import type { IToken } from '../interfaces/token'

export function sign(data: IToken) {
  const token = jwt.sign(data, 'SECRET', { expiresIn: '1d' })

  return token
}

export function decode(token: string): IToken {
  const data = jwt.decode(token) as IToken

  return data
}