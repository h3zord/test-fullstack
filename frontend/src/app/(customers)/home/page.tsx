'use client'

import { DefaultButton } from '@/app/components/styles'
import {
  CallToActionContainer,
  CustomersContainer,
  CustomersContent,
  IntroductionText,
  Main,
  StatusIndicator,
  TestInput,
} from './styles'
import { FiUser } from 'react-icons/fi'
import InputMask from 'react-input-mask'

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

      <CustomersContainer>
        <CustomersContent>
          <div>
            <p>nome</p>
            <span>email</span>
          </div>
          <div>
            <InputMask mask="999.999.999-99" value="00683463950"></InputMask>
            <InputMask mask="(99) 99999-9999" value="42999880661"></InputMask>
          </div>
          <div>
            <StatusIndicator $currentStatus="Ativo" /> status
          </div>
          <DefaultButton>Editar</DefaultButton>
        </CustomersContent>
      </CustomersContainer>
    </Main>
  )
}
