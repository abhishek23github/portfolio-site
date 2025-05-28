import React, { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import styled from "styled-components";
import ProjectModal from "../components/ProjectModal";
import Card from "../components/ProjectCard"; // Assuming you have a styled component for the card

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* ✅ Responsive columns */
  gap: 2rem;
  padding: 4rem 2rem;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  scroll-margin-top: 80px;
`;


export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Grid id="projects">
      {projects.map((project, idx) => (
        <div key={idx} onClick={() => setSelectedProject(project)} style={{ cursor: 'pointer' }}>
          <ProjectCard project={project} />
        </div>
      ))}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </Grid>
  );
}
