import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import DefaultLayout from '@/layouts/DefaultLayout'
import { QueryClient, QueryClientProvider } from 'react-query'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </QueryClientProvider>
  )
}
