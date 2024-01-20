import styled from '@emotion/styled'
import { colors } from '@/styles/colors'
import CustomHead from '@/components/common/CustomHead'
import Header from '@/components/common/Header'
import BottomDrawer from '@/components/common/BottomDrawer'
import Item from '@/components/pages/order/Item'
import orderStore from '@/stores/orderStore'
import { observer } from 'mobx-react'
import { formatNumberWithCommas } from '@/utils/addCommasToNumber'
import Spacing from '@/layouts/Spacing'
import { useGetItems } from '@/hooks/fetch/useFetchItems'

function Order() {
  const { data: items, isLoading, isError, refetch } = useGetItems()

  const { getTotalQuantities, getTotalPrices } = orderStore

  return (
    <>
      <CustomHead title={'주문하기'} />
      <Header />
      <Container>
        <Items>
          {items?.map((item) => <Item key={item.id} item={item} />)}
        </Items>
        <Cart>
          <Total>
            <p>총 수량 : {getTotalQuantities()}개</p>
            <Spacing size={5} />
            <p>총 가격 : {formatNumberWithCommas(getTotalPrices())}개</p>
          </Total>
          <OrderButton disabled={getTotalQuantities() === 0}>
            주문하기
          </OrderButton>
        </Cart>
      </Container>
    </>
  )
}

const Container = styled.main`
  background-color: ${colors.white};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Items = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 24px;
  min-height: 100%;
`

const Cart = styled(BottomDrawer)`
  height: 170px;
  padding: 23px 27px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const Total = styled.div`
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

export default observer(Order)
