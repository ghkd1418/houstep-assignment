import Image from 'next/image'
import styled from '@emotion/styled'
import { colors } from '@/styles/colors'
import Link from 'next/link'

function Header() {
  return (
    <StyledHeader>
      <Link href={'/'}>
        <Image
          src={'/icons/logo-black.svg'}
          alt={'로고'}
          width={94}
          height={32}
          priority
        />
      </Link>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  height: 57px;
  padding: 12px;
  background-color: ${colors.black};
  left: 0;
`

export default Header
