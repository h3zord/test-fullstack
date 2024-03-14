'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { api } from '@/fetch/api'
import { useCallback, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

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
    <form
      onSubmit={handleSubmit(handleSubmitLogin)}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <input
        placeholder="Digite seu email!"
        type="text"
        {...register('email')}
      />

      {errors.email && <p>{errors.email.message}</p>}

      <input
        placeholder="Digite sua senha!"
        type="password"
        {...register('password')}
      />

      {errors.password && <p>{errors.password.message}</p>}

      {loginError && <p>{loginError}</p>}

      <div>
        <button type="submit" disabled={isSubmitting}>
          Login
        </button>
        <button onClick={handleLoginAsGuest}>Entrar como visitante</button>
      </div>

      <button>Github</button>
    </form>
  )
}
