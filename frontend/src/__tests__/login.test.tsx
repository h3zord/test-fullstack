import Login from '@/app/login'
import { defaultTheme } from '@/app/styles/theme'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    }
  },
}))

test('renders login form correctly', () => {
  render(
    <ThemeProvider theme={defaultTheme}>
      <Login />
    </ThemeProvider>,
  )

  expect(screen.getByPlaceholderText(/Digite seu email/i)).toBeInTheDocument()
  expect(screen.getByPlaceholderText(/Digite sua senha/i)).toBeInTheDocument()

  expect(screen.getByText(/Login/i)).toBeInTheDocument()
  expect(screen.getByText(/Entrar com Github/i)).toBeInTheDocument()
  expect(screen.getByText(/Entrar como visitante/i)).toBeInTheDocument()
})

test('submits login form with invalid data', async () => {
  render(
    <ThemeProvider theme={defaultTheme}>
      <Login />
    </ThemeProvider>,
  )

  fireEvent.click(screen.getByText('Login'))

  await waitFor(() => {
    expect(
      screen.getByText(/Digite seu email corretamente!/i),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/A senha deve possuir no mínimo 5 caracteres!/i),
    ).toBeInTheDocument()
  })
})
