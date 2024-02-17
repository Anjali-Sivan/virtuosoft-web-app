// Importing React and styled-components
import React, { useState } from "react";
import logo from "../../Assets/Logo/virtuosoft-logo-2x.png";
import styled from "styled-components";
import { MenuButton } from "../MenuBUtton";
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
  z-index:2000;
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
    // position: fixed;
    top: 50px; 
    width:100vw;
    height:100vh;
    background-color: #fff; // Background color for the dropdown
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
  box-sizing:border-box;
  transition: border-bottom 0.5s ease, color 0.5s ease; /* Add transition */
  &:hover {
    border-bottom:5px solid #000;
  }
`;

// Styled component for the contact link
const ContactLink = styled(NavLink)`
  position: absolute;
  right: 40px;
  border-radius: 60px;
  border: 1.5px solid #000;
  height: 15px;
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
  transition: background-color 0.5s ease, color 0.5s ease; /* Add transition */
  
  &:hover {
    background-color: #000;
    color: #fff;
  }

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
      {/* <NavLinks> */}
      <NavLinks isOpen={isOpen}>
        {[
          { label: "Home", link: "/" },
          { label: "About", link: "/#about-us" },
          { label: "Services", link: "/#services" },
          { label: "Our products", link: "/products" },
          { label: "Achievements", link: "/achievements" },
        ].map((item, index) => (
          <NavLink key={index} index={index} onClick={() => setIsOpen(!isOpen)}>
            <Link href={item.link}>{item.label}</Link>
          </NavLink>
        ))}
      {/* </NavLinks> */}
      </NavLinks>
      <ContactLink as="a" href="/contact-us">
        Contact us
      </ContactLink>
      <Burger>
        <MenuButton
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />
      </Burger>
    </NavbarContainer>
  );
};

export default Navbar;
