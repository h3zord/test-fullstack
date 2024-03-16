import CustomerInfo from '@/app/components/customer-information/customerInfo'
import { FiUser } from 'react-icons/fi'
import { CallToActionContainer, IntroductionText, Main } from './styles'

export default function Home() {
  return (
    <Main>
      <IntroductionText>
        <FiUser color="black" /> Painel de Clientes
      </IntroductionText>
      <CallToActionContainer
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
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
