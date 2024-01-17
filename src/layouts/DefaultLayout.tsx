import styled from '@emotion/styled'

interface DefaultLayoutProps {
  children: React.ReactNode
}

function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Wrapper className='mx-auto max-w-[375px] px-[28px] py-[22px]'>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 350px;
`

export default DefaultLayout
