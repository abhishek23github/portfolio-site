import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: #1c1c1c;
  color: white;
  padding: 2rem;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 20px rgba(79, 195, 247, 0.6);
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  margin: 0;
`;

const Tech = styled.div`
  font-size: 0.8rem;
  margin: 10px 0;
  color: #ccc;
`;

const Links = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 10px;

  a {
    color: #4fc3f7;
    text-decoration: none;
  }
`;

export default function ProjectCard({ project }) {
  if (!project) return null;

  return (
    <Card>
      <Image src={project.image} alt={project.title} />
      <Title>{project.title}</Title>
      {/* ✅ Show short summary */}
      {project.summary && (
        <p
          style={{ fontSize: "0.9rem", color: "#ccc", margin: "0.5rem 0 1rem" }}
        >
          {project.summary}
        </p>
      )}
      {Array.isArray(project.techStack) && (
        <Tech>{project.techStack.join(", ")}</Tech>
      )}
      <Links>
        <a href={project.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={project.demo} target="_blank" rel="noreferrer">
          Demo
        </a>
      </Links>
    </Card>
  );
}
