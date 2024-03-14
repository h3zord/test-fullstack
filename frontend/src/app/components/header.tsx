import Image from 'next/image'
import { HeaderContainer } from './styles'

export default function Header() {
  return (
    <HeaderContainer>
      <Image src="/uol-logo.svg" width={150} height={100} alt="Logo da UOL" />
    </HeaderContainer>
  )
}
