import styled from '@emotion/styled'

interface SpacingProps {
  size: number
}

function Spacing({ size }: SpacingProps) {
  return <StyledSpacing size={size} />
}

const StyledSpacing = styled.div<SpacingProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`

export default Spacing
