'use client'

import StyledComponentsRegistry from '../lib/registry'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/global'
import { defaultTheme } from '@/styles/theme'

export const Providers = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  )
}
