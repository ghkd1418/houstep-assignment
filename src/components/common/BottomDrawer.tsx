import { colors } from '@/styles/colors'
import styled from '@emotion/styled'
import React, { Children } from 'react'

interface BottomDrawerProps {
  children: React.ReactNode
}

function BottomDrawer({ children, ...props }: BottomDrawerProps) {
  return <Container {...props}>{children}</Container>
}

const Container = styled.div<BottomDrawerProps>`
  position: sticky;
  bottom: 0;
  width: 100%;
  background-color: ${colors.white};
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px 20px 0px 0px;
`

export default BottomDrawer
