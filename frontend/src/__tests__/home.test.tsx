import Home from '@/app/(customers)/home/page'
import { defaultTheme } from '@/app/styles/theme'
import { api } from '@/fetch/api'
import { act, render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    }
  },
}))

jest.mock('../fetch/api.ts', () => ({
  api: jest.fn(),
}))

test('renders home page correctly', async () => {
  const mockCustomer = [
    {
      id: '1',
      full_name: 'Lucas Test',
      email: 'test@example.com',
      cpf: '12345678901',
      phone: '12345678901',
      status: 'Ativo',
    },
  ]

  ;(api as jest.Mock).mockResolvedValueOnce({ data: mockCustomer })

  await act(async () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Home />
      </ThemeProvider>,
    )
  })

  expect(
    screen.getByRole('button', { name: /novo cliente/i }),
  ).toBeInTheDocument()

  await screen.findByText(/Lucas Test/i)
  await screen.findByText(/test@example.com/i)
  await screen.findByDisplayValue(/123.456.789-01/i)
  await screen.findByDisplayValue('(12) 34567-8901')
  await screen.findByText(/Ativo/i)
  await screen.findByRole('button', { name: /editar/i })

  await screen.findByText(/Exibindo 1 clientes/i)
})
