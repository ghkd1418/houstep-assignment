import { colors } from '@/styles/colors'
import styled from '@emotion/styled'

interface TagProps {
  children: string
}

export default function Tag({ children }: TagProps) {
  return <Container>{children}</Container>
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 53px;
  height: 23px;
  border-radius: 10px;
  color: ${colors.white};
  background: ${colors.primary};
  font-size: 13px;
  text-align: center;
`
