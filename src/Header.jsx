import styled from 'styled-components'

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 3rem;
  z-index: 10;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 40px;
  width: auto;
  display: block;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.2s;
  &:hover {
    color: #90cdf4;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <LogoImg src="/jules-test/das_solo.svg" alt="Logo" />
      </Logo>
      <Nav>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#shop">Shop</NavLink>
        <NavLink href="#sponsorship">Sponsorship</NavLink>
      </Nav>
    </HeaderContainer>
  )
}
