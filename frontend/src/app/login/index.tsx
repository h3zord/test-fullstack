'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { api } from '@/fetch/api'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FiGithub } from 'react-icons/fi'
import { MdOutlineLogin, MdFolderShared } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { ButtonContainer, Form, IntroductionTitle, LoginButton } from './styles'
import { DefaultErrorContainer, DefaultInput } from '../components/styles'
import { signIn } from 'next-auth/react'

export default function Login() {
  const [loginError, setLoginError] = useState('')

  const router = useRouter()

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
          message: 'A senha deve possuir no mínimo 5 caracteres!',
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

      return router.push('/home')
    } catch (error) {
      if (error instanceof Error) setLoginError(error.message)
    }
  }

  function handleLoginAsGuest() {
    return router.push('/home')
  }

  type ErrorFieldType = {
    errorMap: 'email' | 'password'
  }

  function showErrorMessage({ errorMap }: ErrorFieldType) {
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

        {showErrorMessage({ errorMap: 'email' })}

        <DefaultInput
          placeholder="Digite sua senha!"
          type="password"
          {...register('password')}
        />

        {showErrorMessage({ errorMap: 'password' })}

        <DefaultErrorContainer>{loginError}</DefaultErrorContainer>

        <ButtonContainer>
          <LoginButton type="submit" disabled={isSubmitting}>
            Login <MdOutlineLogin />
          </LoginButton>
          <LoginButton
            type="button"
            onClick={() => signIn('github', { callbackUrl: '/home' })}
          >
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
