import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'

const StyledHeader = styled.header`
  padding: 20px;
  padding-right: 100px;
  background: #020203;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const StyledNavLink = styled(NavLink)`
  color: #ffffff;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  text-decoration: none;
`

function Header() {
  return (
    <StyledHeader>
      <StyledNav>
        <img src={logo} alt="SportSee Logo" />
        <StyledNavLink to="/">Accueil</StyledNavLink>
        <StyledNavLink to="/">Profil</StyledNavLink>
        <StyledNavLink to="/">Règlages</StyledNavLink>
        <StyledNavLink to="/">Communauté</StyledNavLink>
      </StyledNav>
    </StyledHeader>
  )
}

export default Header
