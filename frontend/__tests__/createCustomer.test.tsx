import CustomerForm from '@/app/components/customer-form'
import { defaultTheme } from '@/app/styles/theme'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    }
  },
  useParams() {
    return {
      id: undefined,
    }
  },
}))

test('renders customer form correctly', () => {
  render(
    <ThemeProvider theme={defaultTheme}>
      <CustomerForm formFinality="create" />
    </ThemeProvider>,
  )

  expect(screen.getByText('Novo usuário')).toBeInTheDocument()
  expect(screen.getByPlaceholderText(/Nome/i)).toBeInTheDocument()
  expect(screen.getByPlaceholderText(/E-mail/i)).toBeInTheDocument()
  expect(screen.getByPlaceholderText(/CPF/i)).toBeInTheDocument()
  expect(screen.getByPlaceholderText(/Telefone/i)).toBeInTheDocument()
  expect(screen.getByRole('combobox')).toBeInTheDocument()

  expect(screen.getByRole('button', { name: /Criar/i })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /Voltar/i })).toBeInTheDocument()
})

test('submits customer form with invalid data', async () => {
  render(
    <ThemeProvider theme={defaultTheme}>
      <CustomerForm formFinality="create" />
    </ThemeProvider>,
  )

  fireEvent.click(screen.getByRole('button', { name: /Criar/i }))

  await waitFor(() => {
    expect(
      screen.getByText(/O nome deve conter no mínimo 5 caracteres!/i),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Digite seu email corretamente!/i),
    ).toBeInTheDocument()

    expect(
      screen.getByText(/O CPF deve conter exatamente 11 números!/i),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/O telefone deve conter exatamente 11 números!/i),
    ).toBeInTheDocument()
    expect(screen.getByText(/Selecione um status!/i)).toBeInTheDocument()
  })
})
