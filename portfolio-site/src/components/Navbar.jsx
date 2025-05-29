import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.6); /* ✅ Semi-transparent background */
  backdrop-filter: blur(6px); /* ✅ Optional blur for modern glass effect */
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1); /* Subtle divider */
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: white;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      color: #4fc3f7;
    }
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <h2>⚡ Abhishek.dev</h2>
      <NavLinks>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a
          href="/Abhishek_Chakrabarty_Resume_.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </NavLinks>
    </Nav>
  );
}
