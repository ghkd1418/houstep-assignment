import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import DefaultLayout from '@/layouts/DefaultLayout'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useState } from 'react'
import { QUERY_CLIENT_OPTIONS } from '@/constants/reactQuery'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient(QUERY_CLIENT_OPTIONS))

  return (
    <QueryClientProvider client={queryClient}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </QueryClientProvider>
  )
}
