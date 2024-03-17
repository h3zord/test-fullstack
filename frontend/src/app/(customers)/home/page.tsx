'use client'

import { useRouter } from 'next/navigation'
import CustomerInfo from './customer-information'
import { CallToActionContainer, Main } from './styles'

export default function Home() {
  const router = useRouter()

  function pushToCreateCustomer() {
    return router.push('/create-customer')
  }

  return (
    <Main>
      <CallToActionContainer>
        <div>
          <p>Listagem de usuários</p>
          <span>Escolha um cliente para visualizar os detalhes</span>
        </div>
        <button onClick={pushToCreateCustomer}>Novo cliente</button>
      </CallToActionContainer>
      <CustomerInfo />
    </Main>
  )
}
