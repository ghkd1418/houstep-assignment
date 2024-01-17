import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import DefaultLayout from '@/layouts/DefaultLayout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}
