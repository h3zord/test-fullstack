import bcrypt from 'bcryptjs'

interface IGetUserData {
  email: string
  password: string
}

export async function getLoginService({ email, password }: IGetUserData) {
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
