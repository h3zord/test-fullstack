'use client'

import InputMask from 'react-input-mask'
import { DefaultButton } from '@/app/components/styles'
import { CustomersContainer, CustomersContent, StatusIndicator } from './styles'
import { useEffect, useState } from 'react'
import { api } from '@/fetch/api'

interface ICustomers {
  id: string
  full_name: string
  email: string
  cpf: string
  phone: string
  status: 'Ativo' | 'Inativo' | 'Aguardando autorização' | 'Desativado'
}

export default function CustomerInfo() {
  const [customersList, setCustomersList] = useState<ICustomers[]>()

  async function getCustomers() {
    const { data } = await api('/customer')

    console.log(data)

    setCustomersList(data)
  }

  useEffect(() => {
    getCustomers()
  }, [])

  return (
    <CustomersContainer>
      {customersList?.map((customer) => (
        <CustomersContent key={customer.id}>
          <div>
            <p>{customer.full_name}</p>
            <span>{customer.email}</span>
          </div>

          <div>
            <InputMask mask="999.999.999-99" value={customer.cpf}></InputMask>
            <InputMask
              mask="(99) 99999-9999"
              value={customer.phone}
            ></InputMask>
          </div>

          <div>
            <StatusIndicator $currentStatus={customer.status} />
            {customer.status}
          </div>

          <DefaultButton>Editar</DefaultButton>
        </CustomersContent>
      ))}

      <span>{`Exibindo ${customersList?.length} clientes`}</span>
    </CustomersContainer>
  )
}
