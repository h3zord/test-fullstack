'use client'

import InputMask from 'react-input-mask'
import { DefaultButton } from '@/app/components/styles'
import { CustomersContainer, CustomersContent, StatusIndicator } from './styles'

export default function CustomerInfo() {
  return (
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

      <span>Exibindo x clientes</span>
    </CustomersContainer>
  )
}
