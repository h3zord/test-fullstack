/* eslint-disable prettier/prettier */
import 'styled-components'
import { defaultTheme } from '@/app/styles/theme'

type Theme = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme { }
}
