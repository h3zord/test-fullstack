import { CallToActionContainer, IntroductionText, Main } from './styles'
import { FiUser } from 'react-icons/fi'

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

      <section>
        <div
          style={{
            border: '1px solid red',
            marginBottom: '25px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            height: '100px',
          }}
        >
          <p>teste</p>
          <p>teste</p>
          <p>teste</p>
          <p>teste</p>
        </div>
        <div style={{ border: '1px solid red', marginBottom: '25px' }}>
          test test test test
        </div>
        <div style={{ border: '1px solid red', marginBottom: '25px' }}>
          test test test test
        </div>
      </section>
    </Main>
  )
}
