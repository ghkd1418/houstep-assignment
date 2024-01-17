import Image from 'next/image'
import largeLogo from '/public/icons/logo-black-large.svg'
import styled from '@emotion/styled'
import { colors } from '@/styles/colors'
import CustomHead from '@/components/common/CustomHead'
import LinkButton from '@/components/common/LinkButton'
import Spacing from '@/layouts/Spacing'

export default function Home() {
  return (
    <>
      <CustomHead title={'홈'} />
      <Container>
        <Image src={largeLogo} alt={'로고'} />
        <Spacing size={41} />
        <StyledLinkButton href='/order'>주문하러 가기</StyledLinkButton>
      </Container>
    </>
  )
}

const Container = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.black};
`

const StyledLinkButton = styled(LinkButton)`
  width: 172px;
  height: 88px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
  &:hover {
    opacity: 0.9;
  }
`
