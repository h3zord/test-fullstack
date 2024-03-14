import bcrypt from 'bcryptjs'
import { TLoginSchema } from '../validate-schema/login'
import { prisma } from '../lib/prisma'

export async function loginService({ email, password }: TLoginSchema) {
  const userData = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (!userData) throw new Error('Email ou senha estão incorretos!')

  const hash = userData.password

  if (!bcrypt.compareSync(password, hash))
    throw new Error('Email ou senha estão incorretos!')
}
