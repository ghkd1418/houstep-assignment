import styled from '@emotion/styled'
import useDelayedNavigation from '@/hooks/common/useDelayedNavigation'
import { colors } from '@/styles/colors'

function Error() {
  useDelayedNavigation('/order')

  return (
    <Container>
      <p>
        주문에 실패하였습니다.
        <br />
        다시 시도해주세요.
      </p>
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

  p {
    font-size: 18px;
    text-align: center;
  }
`

export default Error
