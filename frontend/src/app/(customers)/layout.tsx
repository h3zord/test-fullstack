'use client'

import { FiUser } from 'react-icons/fi'
import { IntroductionTitle } from '../components/styles'

export default function CustomerLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <IntroductionTitle>
        <FiUser color="black" /> Painel de Clientes
      </IntroductionTitle>
      {children}
    </>
  )
}
