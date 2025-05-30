/* eslint-disable no-unused-vars -- motion is used in JSX context */

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  min-height: 80vh;
  width: 100%;
  padding: 6rem 2rem 3rem;
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  text-align: center;
`;

const Name = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Tagline = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Summary = styled.p`
  max-width: 900px;
  font-size: 1.11rem;
  line-height: 1.6;
  color: #ddd;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`;

export default function HeroSection() {
  return (
    <Container>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        Abhishek Chakrabarty
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}>
        I build {' '}
        <Typewriter
          words={[
            "GenAI tools",
            "LLM apps",
            "AI dashboards",
            "Data Analyzers",
          ]}
          loop
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}>
        I’m a GenAI-focused product builder with a passion for designing
        practical, production-ready experiences using LLMs and modern frontend
        technologies. My work combines thoughtful UX with intelligent automation
        — whether it's translating code, analyzing incidents, or building AI
        dashboards. This portfolio showcases apps I’ve built to bridge ideas
        into outcomes, with a deep focus on usability, creativity, and
        responsible AI adoption.
      </motion.p>

    </Container>
  );
}
