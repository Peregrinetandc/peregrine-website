import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../../assets/styles/components/_navbar.scss';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(15px);
  border-radius: 0 0 15px 15px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  &:hover {
    background: rgba(255, 255, 255, 0.7);
  }
`;

const Logo = styled.div`
  font-size: 26px;
  font-weight: bold;
  font-family: 'Orbitron', sans-serif;
  color: #009688;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ff9800;
    text-shadow: 0px 0px 10px rgba(255, 152, 0, 0.8);
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #ff9800;
  font-weight: bold;
  font-size: 16px;
  padding: 12px 20px;
  border-radius: 8px;
  position: relative;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: rgba(255, 255, 255, 0.5);
    color: #009688;
    text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.8);
    transform: scale(1.1);
  }

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -5px;
    width: 0%;
    height: 3px;
    background: linear-gradient(135deg, #009688, #ff9800);
    transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
    left: 0%;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>MyLogo</Logo>
      <NavLinks>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;