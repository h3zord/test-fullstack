'use client'

import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@/fetch/api'
import { useState } from 'react'
import { z } from 'zod'
import {
  DefaultButton,
  DefaultErrorContainer,
  DefaultInput,
  DefaultSelect,
} from '../styles'
import {
  CallToActionContainer,
  CustomerFormContainer,
  CustomerFormContent,
  FormButtonContainer,
  StyledInputMask,
} from './styles'

interface ICustomerFormProps {
  finality: 'create' | 'update'
}

export default function CustomerForm({ finality }: ICustomerFormProps) {
  const [createOrUpdateError, setCreateOrUpdateError] = useState('')

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
          errorMap: (issue) => {
            if (
              issue.code === 'invalid_enum_value' ||
              issue.code === 'invalid_type'
            ) {
              return { message: 'Selecione um status!' }
            }
            return { message: issue.message ?? '' }
          },
        },
      ),
    })
    .required()

  type TCustomerFormSchema = z.infer<typeof customerFormSchema>

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TCustomerFormSchema>({
    resolver: zodResolver(customerFormSchema),
    defaultValues: {
      cpf: '',
      phone: '',
    },
  })

  type TPossibleErrors = {
    errorMap: 'fullName' | 'email' | 'cpf' | 'phone' | 'status'
  }

  function showErrorMessage({ errorMap }: TPossibleErrors) {
    if (errors[errorMap]) {
      return (
        <DefaultErrorContainer>
          {errors[errorMap]?.message}
        </DefaultErrorContainer>
      )
    } else {
      return <DefaultErrorContainer />
    }
  }

  async function handleCreateCustomer(data: TCustomerFormSchema) {
    try {
      await api('/customer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: data.fullName,
          email: data.email,
          cpf: data.cpf,
          phone: data.phone,
          status: data.status,
        }),
      })

      reset()
      window.alert('Usuário criado!')
    } catch (error) {
      if (error instanceof Error) setCreateOrUpdateError(error.message)
    }
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
        {finality === 'create' ? (
          <div>
            <p>Novo usuário</p>
            <span>Informe os campos a seguir para criar novo usuário:</span>
          </div>
        ) : (
          <div>
            <p>Atualizar usuário</p>
            <span>Informe os campos a seguir para atualizar usuário:</span>
          </div>
        )}
      </CallToActionContainer>

      <CustomerFormContent>
        <DefaultInput placeholder="Nome" {...register('fullName')} />

        {showErrorMessage({ errorMap: 'fullName' })}

        <DefaultInput placeholder="E-mail" {...register('email')} />

        {showErrorMessage({ errorMap: 'email' })}

        <Controller
          control={control}
          name="cpf"
          render={({ field }) => {
            return (
              <StyledInputMask
                mask="999.999.999-99"
                placeholder="CPF"
                onChange={field.onChange}
                value={field.value}
              />
            )
          }}
        />

        {showErrorMessage({ errorMap: 'cpf' })}

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

        {showErrorMessage({ errorMap: 'phone' })}

        <DefaultSelect {...register('status')}>
          <option>Status</option>
          <option value="Ativo">Ativo</option>
          <option value="Inativo">Inativo</option>
          <option value="Aguardando ativação">Aguardando ativação</option>
          <option value="Desativado">Desativado</option>
        </DefaultSelect>

        {showErrorMessage({ errorMap: 'status' })}

        <DefaultErrorContainer>{createOrUpdateError}</DefaultErrorContainer>
      </CustomerFormContent>

      <FormButtonContainer>
        <DefaultButton
          type="submit"
          disabled={isSubmitting}
          $reverseHover={true}
        >
          {finality === 'create' ? 'Criar' : 'Atualizar'}
        </DefaultButton>
        <DefaultButton>Voltar</DefaultButton>
      </FormButtonContainer>
    </CustomerFormContainer>
  )
}
