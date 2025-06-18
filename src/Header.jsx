import { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
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
  background: rgba(0,0,0,0.1);

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 1rem 1.5rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
`;

const LogoImg = styled.img`
  height: 40px;
  width: auto;
  display: block;

  @media (max-width: 600px) {
    height: 32px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 900px) {
    gap: 1rem;
    margin-top: 0.5rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }
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
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  z-index: 20;
  @media (max-width: 900px) {
    display: block;
    position: absolute;
    right: 2rem;
    top: 1.2rem;
  }
`;

const MobileNav = styled.nav`
  display: none;
  @media (max-width: 900px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.98);
    align-items: center;
    justify-content: center;
    gap: 2rem;
    z-index: 15;
    transition: all 0.3s;
  }
`;

const DesktopNav = styled(Nav)`
  @media (max-width: 900px) {
    display: none;
  }
`;

const StyledHeaderContainer = styled(HeaderContainer)`
  background: ${({ $scrolled, $menuOpen }) =>
    $menuOpen || $scrolled ? 'rgba(0,0,0,0.98)' : 'rgba(0,0,0,0.1)'};
  transition: all 0.3s;
`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <StyledHeaderContainer $scrolled={scrolled} $menuOpen={menuOpen}>
      <Logo>
        <LogoImg src="/jules-test/das_solo.svg" alt="Logo" />
      </Logo>
      <DesktopNav>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#shop">Shop</NavLink>
        <NavLink href="#sponsorship">Sponsorship</NavLink>
      </DesktopNav>
      <MobileMenuIcon onClick={() => setMenuOpen((open) => !open)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </MobileMenuIcon>
      <MobileNav open={menuOpen} ref={menuRef}>
        <NavLink href="#about" onClick={() => setMenuOpen(false)}>About</NavLink>
        <NavLink href="#shop" onClick={() => setMenuOpen(false)}>Shop</NavLink>
        <NavLink href="#sponsorship" onClick={() => setMenuOpen(false)}>Sponsorship</NavLink>
      </MobileNav>
    </StyledHeaderContainer>
  );
}
