import React from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import styled from "styled-components";

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* ✅ Responsive columns */
  gap: 2rem;
  padding: 4rem 2rem;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  background: #121212;
  scroll-margin-top: 80px;
`;


export default function Projects() {
  return (
    <Grid id="projects" data-aos="fade-up">
      {projects.map((proj, index) => (
        <ProjectCard key={index} project={proj} />
      ))}
    </Grid>
  );
}
