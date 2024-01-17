import styled from '@emotion/styled'
import { colors } from '@/styles/colors'
import CustomHead from '@/components/common/CustomHead'
import Header from '@/components/common/Header'

export default function Order() {
  return (
    <>
      <CustomHead title={'주문하기'} />
      <Header />
      <Container>aa</Container>
    </>
  )
}

const Container = styled.main`
  height: 130px;
  background-color: ${colors.grey01};
`
