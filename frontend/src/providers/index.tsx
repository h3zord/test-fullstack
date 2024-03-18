'use client'

import StyledComponentsRegistry from '../lib/registry'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../app/styles/global'
import { defaultTheme } from '@/app/styles/theme'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <StyledComponentsRegistry>
        <GlobalStyles />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
      </StyledComponentsRegistry>
    </SessionProvider>
  )
}
