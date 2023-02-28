import { Ubuntu } from '@next/font/google'
import '../styles/globals.scss'


// If loading a variable font, you don't need to specify the font weight
const ubuntu = Ubuntu({weight: ['400','500'], subsets: ['latin']})

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <main className={ubuntu.className}>
      <Component {...pageProps} />
    </main>
    </>
  )
}
