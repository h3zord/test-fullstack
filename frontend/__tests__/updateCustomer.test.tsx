import CustomerForm from '@/app/components/customer-form'
import { defaultTheme } from '@/app/styles/theme'
import { api } from '@/fetch/api'
import { render, waitFor, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    }
  },
  useParams() {
    return {
      id: 'fakeID',
    }
  },
}))

jest.mock('../src/fetch/api.ts', () => ({
  api: jest.fn(),
}))

test('renders customer form correctly', async () => {
  const mockCustomer = {
    full_name: 'Lucas Test',
    email: 'test@example.com',
    cpf: '12345678901',
    phone: '12345678901',
    status: 'Ativo',
  }

  ;(api as jest.Mock).mockResolvedValueOnce({ data: mockCustomer })

  render(
    <ThemeProvider theme={defaultTheme}>
      <CustomerForm formFinality="update" />
    </ThemeProvider>,
  )

  await waitFor(async () => {
    await screen.findByDisplayValue(/Lucas Test/i)
    await screen.findByDisplayValue(/test@example.com/i)
    await screen.findByDisplayValue(/123.456.789-01/i)
    await screen.findByDisplayValue('(12) 34567-8901')
    await screen.findByDisplayValue(/Ativo/i)
  })
})
