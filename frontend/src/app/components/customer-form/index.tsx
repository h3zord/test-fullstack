'use client'

import { DefaultButton, DefaultInput, DefaultSelect } from '../styles'
import {
  CallToActionContainer,
  CustomerFormContainer,
  CustomerFormContent,
  FormButtonContainer,
  StyledInputMask,
} from './styles'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

interface ICustomerFormProps {
  finality: 'create' | 'update'
}

export default function CustomerForm({ finality }: ICustomerFormProps) {
  const customerFormSchema = z
    .object({
      fullName: z
        .string({
          required_error: 'Digite seu nome!',
        })
        .min(5, {
          message: 'O nome deve conter no mínimo 5 caracteres!',
        }),
      email: z
        .string({
          required_error: 'Digite seu email!',
        })
        .email({ message: 'Digite seu email corretamente!' })
        .toLowerCase(),
      cpf: z
        .string({
          required_error: 'Digite seu CPF!',
        })
        .transform((cpf) => cpf.replace(/\D/g, ''))
        .refine(
          (cpf) => {
            const onlyNumbersRegex = /^[0-9]+$/

            return cpf.length === 11 && onlyNumbersRegex.test(cpf)
          },
          {
            message: 'O CPF deve conter exatamente 11 números!',
          },
        ),
      phone: z
        .string({
          required_error: 'Digite seu telefone!',
        })
        .transform((phone) => phone.replace(/\D/g, ''))
        .refine(
          (phone) => {
            const onlyNumbersRegex = /^[0-9]+$/

            return phone.length === 11 && onlyNumbersRegex.test(phone)
          },
          {
            message: 'O telefone deve conter exatamente 11 números!',
          },
        ),
      status: z.enum(
        ['Ativo', 'Inativo', 'Aguardando ativação', 'Desativado'],
        {
          required_error: 'Selecione um status!',
          invalid_type_error:
            'O campo status deve exatamente "Ativo" ou "Inativo" ou "Aguardando autorização ou "Desativado"!',
        },
      ),
    })
    .required()

  type TCustomerFormSchema = z.infer<typeof customerFormSchema>

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TCustomerFormSchema>({
    resolver: zodResolver(customerFormSchema),
  })

  function handleCreateCustomer(data: TCustomerFormSchema) {
    console.log(data)
  }

  function handleUpdateCustomer(data: TCustomerFormSchema) {
    console.log(data)
  }

  return (
    <CustomerFormContainer
      onSubmit={
        finality === 'create'
          ? handleSubmit(handleCreateCustomer)
          : handleSubmit(handleUpdateCustomer)
      }
    >
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
        <DefaultInput placeholder="Nome" {...register('fullName')} />
        <DefaultInput placeholder="E-mail" {...register('email')} />

        <Controller
          control={control}
          name="cpf"
          render={({ field }) => {
            return (
              <StyledInputMask
                mask="999.999.999-99"
                placeholder="CPF"
                onChange={field.onChange}
              />
            )
          }}
        />

        <Controller
          control={control}
          name="phone"
          render={({ field }) => {
            return (
              <StyledInputMask
                mask="(99) 99999-9999"
                placeholder="Telefone"
                onChange={field.onChange}
              />
            )
          }}
        />

        <DefaultSelect {...register('status')}>
          <option>Status</option>
          <option value="Ativo">Ativo</option>
          <option value="Inativo">Inativo</option>
          <option value="Aguardando ativação">Aguardando ativação</option>
          <option value="Desativado">Desativado</option>
        </DefaultSelect>
      </CustomerFormContent>

      <FormButtonContainer>
        <DefaultButton type="submit" $reverseHover={true}>
          {finality === 'create' ? 'Criar' : 'Atualizar'}
        </DefaultButton>
        <DefaultButton>Voltar</DefaultButton>
      </FormButtonContainer>
    </CustomerFormContainer>
  )
}
