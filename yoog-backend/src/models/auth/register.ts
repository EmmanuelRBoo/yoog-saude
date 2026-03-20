import bcrypt from 'bcrypt'

import { prisma, sign } from '../../utils'
import type { IRegister } from '../../interfaces/auth'

export async function register(data: IRegister) {
  const user = await prisma.user.create({ 
    data: {
      ...data,
      password: await bcrypt.hash(data.password, 8)
    },
    select: {
      id: true,
      email: true,
      name: true,
      tel: true
    }
  })

  return {
    ...user,
    token: sign(user)
  }
}