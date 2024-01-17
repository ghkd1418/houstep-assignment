import Head from 'next/head'

interface CustomHeadProps {
  title: string
}

function CustomHead({ title }: CustomHeadProps) {
  return (
    <Head>
      <title>{title} | 반창창고</title>
      <meta name='description' content='새로워진 반장창고를 만나보세요!' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta property='og:site_name' content='반장창고' />
      <meta property='og:locale' content='ko_KR' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}

export default CustomHead
