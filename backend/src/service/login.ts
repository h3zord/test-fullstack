import bcrypt from 'bcryptjs'
import { TReadLoginSchema } from '../validate-schema/login'
import { prisma } from '../lib/prisma'

export async function readLoginService({ email, password }: TReadLoginSchema) {
  const userData = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (!userData) throw new Error('User not found')

  const hash = userData.password

  if (!bcrypt.compareSync(password, hash))
    throw new Error('Password do not match')
}
