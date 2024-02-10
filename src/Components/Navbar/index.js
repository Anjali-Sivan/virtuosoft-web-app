// Importing React and styled-components
import React, { useState } from "react";
import logo from "../../Assets/Logo/virtuosoft-logo-2x.png";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";

// Styled component for the navbar container
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  color: white;
  padding-left: 40px;
  padding-right: 40px;
  height: 80px;
  top:0;
  position: sticky;
`;

// Styled component for the logo
// const Logo = styled.image`
//   visibility: hidden; // The logo is not displayed on small screens
//   @media screen and (min-width: 768px) {
//     visibility: visible;
//   }
// `;

// Styled component for the navigation links
const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  @media screen and (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 80px; // Assuming navbar height is 80px
    left: 0;
    right: 0;
    background-color: #000; // Background color for the dropdown
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    align-items: center; // Center items vertically
    padding: 0;
    z-index: 10; 
  }
`;

// Styled component for the navigation link
const NavLink = styled.li`
  padding: 15px 20px;
`;

const Link = styled.a`
  text-decoration: none;
  color: #0e1014;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.09px;
`;

// Styled component for the contact link
const ContactLink = styled(NavLink)`
  position: absolute;
  right: 40px;
  border-radius: 60px;
  border: 1.5px solid #000;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #000;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.075px;
  text-decoration: none;
  width: 120px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// Styled component for the burger icon container
const Burger = styled.div`
  display: none;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

// Styled component for the burger icon lines
const BurgerLine = styled.div`
  width: 25px;
  height: 3px;
  background-color: #000;
  margin: 5px;
  cursor: pointer;
`;

// React component for the Navbar
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavbarContainer>
      <img
        src={logo}
        alt="Virtuosoft-Logo"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          width: "160px",
          height: "36px",
        }}
      />
      <NavLinks>
        <NavLink>
          <Link href="/">Home</Link>
        </NavLink>
        <NavLink>
          <Link href="/about-us">About</Link>
        </NavLink>
        <NavLink>
          <Link href="/services">Services</Link>
        </NavLink>
        <NavLink>
          <Link href="/products">Our products</Link>
        </NavLink>
        <NavLink>
          <Link href="/achievements">Achievements</Link>
        </NavLink>
      </NavLinks>
      <ContactLink as="a" href="/contact-us">
        Contact us
      </ContactLink>
      <Burger onClick={() => setIsOpen(!isOpen)}>
        <BurgerLine />
        <BurgerLine />
        <BurgerLine />
      </Burger>
    </NavbarContainer>
  );
};

export default Navbar;
