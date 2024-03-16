'use client'

import { DefaultButton, DefaultInput, DefaultSelect } from '../styles'
import InputMask from 'react-input-mask'
import {
  CallToActionContainer,
  CustomerFormContainer,
  CustomerFormContent,
  FormButtonContainer,
} from './styles'

interface ICustomerFormProps {
  finality: 'create' | 'update'
}

export default function CustomerForm({ finality }: ICustomerFormProps) {
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

        <InputMask mask="(99) 99999-9999" placeholder="Telefone">
          <DefaultInput />
        </InputMask>

        <DefaultSelect>
          <option value="">Status</option>
          <option value="Ativo">Ativo</option>
          <option value="Inativo">Inativo</option>
          <option value="Aguardando ativação">Aguardando ativação</option>
          <option value="Desativado">Desativado</option>
        </DefaultSelect>
      </CustomerFormContent>

      <FormButtonContainer>
        <DefaultButton $reverseHover={true}>
          {finality === 'create' ? 'Criar' : 'Atualizar'}
        </DefaultButton>
        <DefaultButton>Voltar</DefaultButton>
      </FormButtonContainer>
    </CustomerFormContainer>
  )
}
