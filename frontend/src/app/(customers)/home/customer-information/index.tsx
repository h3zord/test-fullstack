'use client'

import InputMask from 'react-input-mask'
import { DefaultButton } from '@/app/components/styles'
import { CustomersContainer, CustomersContent, StatusIndicator } from './styles'
import { useEffect, useState } from 'react'
import { api } from '@/fetch/api'
import { useRouter } from 'next/navigation'

interface ICustomers {
  id: string
  full_name: string
  email: string
  cpf: string
  phone: string
  status: 'Ativo' | 'Inativo' | 'Aguardando autorização' | 'Desativado'
}

export default function CustomerInfo() {
  const [customersList, setCustomersList] = useState<ICustomers[]>([])

  const router = useRouter()

  async function getCustomers() {
    const { data } = await api('/customer')

    setCustomersList(data)
  }

  useEffect(() => {
    getCustomers()
  }, [])

  function pushToUpdateCustomer(id: string) {
    router.push(`/update-customer/${id}`)
  }

  return (
    <CustomersContainer>
      {customersList.map((customer) => (
        <CustomersContent key={customer.id}>
          <div>
            <p>{customer.full_name}</p>
            <span>{customer.email}</span>
          </div>

          <div>
            <InputMask mask="999.999.999-99" value={customer.cpf} />
            <InputMask mask="(99) 99999-9999" value={customer.phone} />
          </div>

          <div>
            <StatusIndicator $currentStatus={customer.status} />
            {customer.status}
          </div>

          <DefaultButton onClick={() => pushToUpdateCustomer(customer.id)}>
            Editar
          </DefaultButton>
        </CustomersContent>
      ))}

      <span>{`Exibindo ${customersList.length} clientes`}</span>
    </CustomersContainer>
  )
}
