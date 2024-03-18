'use client'

import StyledComponentsRegistry from '../lib/registry'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../app/styles/global'
import { defaultTheme } from '@/app/styles/theme'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <StyledComponentsRegistry>
        <GlobalStyles />
        <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
      </StyledComponentsRegistry>
    </SessionProvider>
  )
}
