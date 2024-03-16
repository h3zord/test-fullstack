import CustomerInfo from './customer-information'
import { CallToActionContainer, Main } from './styles'

export default function Home() {
  return (
    <Main>
      <CallToActionContainer>
        <div>
          <p>Listagem de usuários</p>
          <span>Escolha um cliente para visualizar os detalhes</span>
        </div>
        <button>Novo cliente</button>
      </CallToActionContainer>
      <CustomerInfo />
    </Main>
  )
}
