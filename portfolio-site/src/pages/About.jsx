import React from "react";
import styled from "styled-components";
import FadeInSection from "../components/FadeInSection";

const AboutWrapper = styled.section`
  padding: 4rem 2rem;
  background: #1a1a1a;
  color: #ffffff;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1rem;
  line-height: 1.6;
  color: #ccc;
`;

export default function About() {
  return (
    <FadeInSection>
      <AboutWrapper id="about" data-aos="fade-up">
        <Heading>About Me</Heading>
        <Paragraph>
          I’m Abhishek Chakrabarty, a GenAI-driven product thinker who builds LLM-powered tools that solve real business problems. I bring together a passion for technology with a strong understanding of user needs, and I’m currently building a portfolio of AI tools including code converters, email generators, incident analyzers, and responsible AI dashboards. I aim to work at the intersection of product, program management, and applied AI.
        </Paragraph>
      </AboutWrapper>
    </FadeInSection>
  );
}