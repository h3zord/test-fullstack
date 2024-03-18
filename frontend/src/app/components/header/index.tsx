'use client'

import Image from 'next/image'
import { HeaderContainer } from './styles'
import { signOut, useSession } from 'next-auth/react'
import { DefaultButton, WelcomeCard } from '../styles'

export default function Header() {
  const { data } = useSession()

  return (
    <HeaderContainer>
      <Image
        src="/uol-logo.svg"
        width={150}
        height={100}
        alt="Logo da UOL"
        priority
        quality={80}
      />

      {data?.user && (
        <WelcomeCard>
          <Image src={data.user.image ?? ''} width={60} height={60} alt="" />
          <p>{`Olá, ${data.user.name}!`}</p>
          <DefaultButton
            onClick={() => signOut({ callbackUrl: '/' })}
            style={{ width: '30px', padding: '10px' }}
          >
            Sair
          </DefaultButton>
        </WelcomeCard>
      )}
    </HeaderContainer>
  )
}
