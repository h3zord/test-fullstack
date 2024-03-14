'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export default function Login() {
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

  function handleSubmitLogin(loginData: TLoginDataSchema) {
    console.log(loginData)
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

      <div>
        <button type="submit" disabled={isSubmitting}>
          Login
        </button>
        <button type="submit">Entrar como visitante</button>
      </div>

      <button>Github</button>
    </form>
  )
}
