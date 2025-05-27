import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #111;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
      </NavLinks>
    </Nav>
  );
}
