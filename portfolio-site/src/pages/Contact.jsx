import React from "react";
import styled from "styled-components";
import FadeInSection from "../components/FadeInSection";

const ContactSection = styled.section`
  padding: 4rem 2rem;
  background: #111;
  color: white;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 1rem;
`;

const Info = styled.div`
  font-size: 1rem;
  margin-top: 1rem;

  a {
    color: #4fc3f7;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default function Contact() {
  return (
    <FadeInSection>
      <ContactSection id="contact" data-aos="fade-up">
        <Heading>Contact</Heading>
        <Info>
          <p>Email: <a href="mailto:abbyss14@gmail.com">abbyss14@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/abhishek-chakrabarty-1430b1200/" target="_blank" rel="noreferrer">Abhishek Chakrabarty</a></p>
        </Info>
    </ContactSection>
    </FadeInSection>
  );
}