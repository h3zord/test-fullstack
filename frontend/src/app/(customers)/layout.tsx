'use client'

import { FiUser } from 'react-icons/fi'
import {
  DefaultButton,
  IntroductionTitle,
  WelcomeCard,
} from '../components/styles'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

export default function CustomerLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { data } = useSession()

  return (
    <>
      {data?.user && (
        <WelcomeCard>
          <Image src={data.user.image ?? ''} width={60} height={60} alt="" />
          <p>{`Olá, ${data.user.name}!`}</p>
          <DefaultButton
            onClick={() => signOut({ callbackUrl: '/' })}
            style={{ width: '30px' }}
          >
            Sair
          </DefaultButton>
        </WelcomeCard>
      )}

      <IntroductionTitle>
        <FiUser color="black" /> Painel de Clientes
      </IntroductionTitle>
      {children}
    </>
  )
}
