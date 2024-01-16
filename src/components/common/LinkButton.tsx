import Link from 'next/link'
import React from 'react'

interface LinkButtonProps extends React.LinkHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
  href: string
  replace?: boolean
}

export function LinkButton({ href, children, ...props }: LinkButtonProps) {
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  )
}
