import styled from '@emotion/styled'

interface Props {
  size: number
}

function Spacing({ size }: Props) {
  return <StyledSpacing size={size} />
}

const StyledSpacing = styled.div<Props>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`

export default Spacing
