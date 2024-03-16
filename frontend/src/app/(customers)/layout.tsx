import { FiUser } from 'react-icons/fi'
import { IntroductionTitle } from '../components/styles'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <IntroductionTitle>
          <FiUser color="black" /> Painel de Clientes
        </IntroductionTitle>
        {children}
      </body>
    </html>
  )
}
