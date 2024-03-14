import Image from 'next/image'

export default function Header() {
  return (
    <header
      style={{
        border: '1px solid black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image src="/uol-logo.svg" width={150} height={100} alt="Logo da UOL" />
    </header>
  )
}
