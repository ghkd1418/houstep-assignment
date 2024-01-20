import Image from 'next/image'
import styled from '@emotion/styled'
import { colors } from '@/styles/colors'
import CustomHead from '@/components/common/CustomHead'
import Spacing from '@/layouts/Spacing'
import Link from 'next/link'

export default function Custom404() {
  return (
    <>
      <CustomHead title={'Not Found'} />
      <Container>
        <Image
          src={'/icons/logo-black-large.svg'}
          alt={'로고'}
          width={151}
          height={51}
          priority
        />
        <Spacing size={21} />
        <p>페이지를 찾을 수 없습니다.</p>
        <Spacing size={41} />
        <StyledLink href='/'>홈으로 가기</StyledLink>
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

  p {
    font-size: 18px;
    text-align: center;
    color: ${colors.white};
  }
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
