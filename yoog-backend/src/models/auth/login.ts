import bcrypt from 'bcrypt'

import { prisma, sign } from '../../utils'
import type { ILogin } from '../../interfaces/auth'

export async function login(data: ILogin) {
  const user = await prisma.user.findUnique({ 
      where: {
        email: data.email,
        password: bcrypt.hashSync(data.password, 8)
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
      token: user ? sign(user) : ''
    }
}