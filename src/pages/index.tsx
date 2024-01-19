import Image from 'next/image'
import styled from '@emotion/styled'
import { colors } from '@/styles/colors'
import CustomHead from '@/components/common/CustomHead'
import Spacing from '@/layouts/Spacing'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <CustomHead title={'홈'} />
      <Container>
        <Image
          src={'/icons/logo-black-large.svg'}
          alt={'로고'}
          width={151}
          height={51}
          priority
        />
        <Spacing size={41} />
        <StyledLink href='/order'>주문하러 가기</StyledLink>
      </Container>
    </>
  )
}

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  flex-direction: column;
  background-color: ${colors.black};
`

const StyledLink = styled(Link)`
  width: 172px;
  height: 88px;
  border-radius: 20px;
  background-color: ${colors.white};

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.9;
  }
`
