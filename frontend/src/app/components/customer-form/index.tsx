'use client'

import { DefaultInput } from '../styles'
import InputMask from 'react-input-mask'
import {
  CallToActionContainer,
  CustomerFormContainer,
  CustomerFormContent,
} from './styles'

interface ICustomerFormProps {
  finality: 'create' | 'update'
}

export default function CustomerForm({ finality }: ICustomerFormProps) {
  console.log(finality)

  return (
    <CustomerFormContainer>
      <CallToActionContainer>
        <div>
          <p>{finality === 'create' ? 'Novo usuário' : 'Atualizar usuário'}</p>
          <span>
            {finality === 'create'
              ? 'Informe os campos a seguir para criar novo usuário:'
              : 'Informe os campos a seguir para atualizar usuário:'}
          </span>
        </div>
      </CallToActionContainer>

      <CustomerFormContent>
        <DefaultInput placeholder="Nome" />
        <DefaultInput placeholder="E-mail" />

        <InputMask mask="999.999.999-99" placeholder="CPF">
          <DefaultInput />
        </InputMask>

        <InputMask mask="999.999.999-99" placeholder="Telefone">
          <DefaultInput />
        </InputMask>
      </CustomerFormContent>
    </CustomerFormContainer>
  )
}
