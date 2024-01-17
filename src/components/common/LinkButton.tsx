import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'

interface LinkButtonProps extends React.LinkHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
  href: string
  replace?: boolean
}

function LinkButton({ href, children, ...props }: LinkButtonProps) {
  return (
    <Container href={href} {...props}>
      {children}
    </Container>
  )
}

const Container = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.9;
  }
`

export default LinkButton
