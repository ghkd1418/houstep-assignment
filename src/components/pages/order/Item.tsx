import orderStore from '@/stores/orderStore'
import { colors } from '@/styles/colors'
import { ItemType } from '@/types/item'
import { formatNumberWithCommas } from '@/utils/addCommasToNumber'
import styled from '@emotion/styled'
import { observer } from 'mobx-react'
import Tag from './Tag'

interface ItemProps {
  item: ItemType
}

function Item({ item }: ItemProps) {
  const { getItemQuantity, increase, decrease } = orderStore

  return (
    <Container selected={getItemQuantity(item.id) > 0}>
      <DefaultImage />
      <ItemInfo>
        <ItemTitle>
          <Name>{item.name}</Name>
          {!!item.event && <Tag name='이벤트' />}
        </ItemTitle>
        <ItemContent>
          <Counter>
            <Button onClick={() => decrease(item.id)}>-</Button>
            <Count>{getItemQuantity(item.id)}</Count>
            <Button onClick={() => increase(item)}>+</Button>
          </Counter>
          <div>{formatNumberWithCommas(item.price)}원</div>
        </ItemContent>
      </ItemInfo>
    </Container>
  )
}

const Container = styled.li<{ selected?: boolean }>`
  display: flex;
  gap: 8px;
  padding: 9px 12px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);

  background-color: ${(props) => (props.selected ? '#F75A2F1A' : colors.white)};
`

const DefaultImage = styled.div`
  width: 62px;
  height: 62px;
  background: ${colors.grey02};
`

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`

const ItemTitle = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
`

const Name = styled.span`
  font-size: 18px;
`

const ItemContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Counter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 24px;
  font-size: 18px;
  text-align: center;
  gap: 3px;
`

const Count = styled.span`
  font-size: 18px;
  display: inline-block;
`

const Button = styled.button`
  font-size: 18px;
  border: none;
  background: none;
`

export default observer(Item)
