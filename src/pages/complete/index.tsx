import Image from 'next/image'
import useDelayedNavigation from '@/hooks/common/useDelayedNavigation'
import styled from '@emotion/styled'
import { colors } from '@/styles/colors'

function Complete() {
  useDelayedNavigation('/order')

  return (
    <Container>
      <Image
        src={'/icons/CheckFilled.svg'}
        alt={'로고'}
        width={94}
        height={32}
        priority
      />
      <p>주문이 완료되었습니다.</p>
    </Container>
  )
}

const Container = styled.div`
  background-color: ${colors.white};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  p {
    font-size: 18px;
    text-align: center;
  }
`

export default Complete
