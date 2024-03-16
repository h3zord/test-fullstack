'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { api } from '@/fetch/api'
import { useCallback, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FiGithub } from 'react-icons/fi'
import { MdOutlineLogin, MdFolderShared } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { ButtonContainer, Form, IntroductionTitle, LoginButton } from './styles'
import { DefaultErrorContainer, DefaultInput } from '../components/styles'

export default function Login() {
  const [loginError, setLoginError] = useState('')

  const router = useRouter()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams],
  )

  const loginDataSchema = z
    .object({
      email: z
        .string({
          required_error: 'Digite seu email!',
        })
        .email({
          message: 'Digite seu email corretamente! ',
        })
        .toLowerCase(),
      password: z
        .string({
          required_error: 'Digite sua senha!',
        })
        .min(5, {
          message: 'A senha deve possuir no mínimo 5 dígitos!',
        }),
    })
    .required()

  type TLoginDataSchema = z.infer<typeof loginDataSchema>

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<TLoginDataSchema>({
    resolver: zodResolver(loginDataSchema),
  })

  async function handleSubmitLogin(loginData: TLoginDataSchema) {
    try {
      await api('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: loginData.email,
          password: loginData.password,
        }),
      })

      router.push('/home' + '?' + createQueryString('user', 'admin'))
    } catch (error) {
      if (error instanceof Error) setLoginError(error.message)
    }
  }

  function handleLoginAsGuest() {
    router.push('/home' + '?' + createQueryString('user', 'guest'))
  }

  return (
    <>
      <IntroductionTitle>
        Gerenciamento de clientes!
        <p>
          <MdFolderShared size={70} />
        </p>
      </IntroductionTitle>
      <Form onSubmit={handleSubmit(handleSubmitLogin)}>
        <DefaultInput
          placeholder="Digite seu email!"
          type="text"
          {...register('email')}
        />

        {errors.email ? (
          <DefaultErrorContainer>{errors.email.message}</DefaultErrorContainer>
        ) : (
          <DefaultErrorContainer></DefaultErrorContainer>
        )}

        <DefaultInput
          placeholder="Digite sua senha!"
          type="password"
          {...register('password')}
        />

        {errors.password ? (
          <DefaultErrorContainer>
            {errors.password.message}
          </DefaultErrorContainer>
        ) : (
          <DefaultErrorContainer></DefaultErrorContainer>
        )}

        {loginError ? (
          <DefaultErrorContainer>{loginError}</DefaultErrorContainer>
        ) : (
          <DefaultErrorContainer></DefaultErrorContainer>
        )}

        <ButtonContainer>
          <LoginButton type="submit" disabled={isSubmitting}>
            Login <MdOutlineLogin />
          </LoginButton>
          <LoginButton type="button">
            Entrar com Github <FiGithub />
          </LoginButton>

          <LoginButton type="button" onClick={handleLoginAsGuest}>
            Entrar como visitante <CgProfile />
          </LoginButton>
        </ButtonContainer>
      </Form>
    </>
  )
}
