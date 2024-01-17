import styled from '@emotion/styled'
import { colors } from '@/styles/colors'
import CustomHead from '@/components/common/CustomHead'
import Header from '@/components/common/Header'
import Spacing from '@/layouts/Spacing'
import BottomDrawer from '@/components/common/BottomDrawer'

export default function Order() {
  return (
    <>
      <CustomHead title={'주문하기'} />
      <Header />
      <Container>
        <ul>
          <li>a</li>
          <li>b</li>
          <li>c</li>
        </ul>
        <Cart>
          <OrderDiv>
            <p>총 수량 : {}개</p>
            <p>총 가격 : {}개</p>
          </OrderDiv>
          <OrderButton>주문하기</OrderButton>
        </Cart>
      </Container>
    </>
  )
}

const Container = styled.main`
  background-color: ${colors.grey01};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Cart = styled(BottomDrawer)`
  height: 170px;
  padding: 27px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const OrderDiv = styled.div`
  align-self: end;
  font-size: 18px;
`

const OrderButton = styled.button`
  width: 301px;
  height: 48px;

  &:hover {
    opacity: 0.9;
  }
`
