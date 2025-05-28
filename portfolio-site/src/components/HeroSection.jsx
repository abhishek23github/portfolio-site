import React from "react";
import { Typewriter } from "react-simple-typewriter";
import styled from "styled-components";

const Container = styled.div`
  min-height: 80vh;
  width: 100%;
  padding: 6rem 2rem 3rem;
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  scroll-margin-top: 80px;
`;

const ContentWrapper = styled.div`
  max-width: 960px;
  width: 100%;
  text-align: center;
`;

const Name = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Tagline = styled.h2`
  font-size: 1.5rem;
`;

export default function HeroSection() {
  return (
    <Container data-aos="fade-up">
      <ContentWrapper>
        <Name>Abhishek Chakrabarty</Name>
        <Tagline>
          I build{" "}
          <Typewriter
            words={[
              "AI dashboards",
              "GenAI tools",
              "LLM apps",
              "incident analyzers",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </Tagline>
      </ContentWrapper>
    </Container>
  );
}
