import React from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import styled from "styled-components";

const Grid = styled.section`
  width: 100%;
  padding: 4rem 2rem;
  background: #121212;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
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
