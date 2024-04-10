import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import { globalStyles } from '../styles/global'
import igniteLogo from '../assets/logo.svg'
import Image from 'next/image'
import { Container, Header } from '../styles/pages/app'

globalStyles()

const roboto = Roboto({
  weight: '400',
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container className={roboto.className}>
      <Header>
        <Image
          src={igniteLogo}
          alt=''
        />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}

