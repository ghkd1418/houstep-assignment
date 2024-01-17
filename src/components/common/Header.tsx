import Image from 'next/image'
import logo from '/public/icons/logo-black.svg'
import styled from '@emotion/styled'
import { colors } from '@/styles/colors'
import LinkButton from './LinkButton'

function Header() {
  return (
    <StyledHeader>
      <LinkButton href='/'>
        <Image src={logo} alt={'로고'} />
      </LinkButton>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  height: 57px;
  padding: 12px;
  background-color: ${colors.black};
`

export default Header
