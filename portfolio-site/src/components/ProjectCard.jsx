import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: #1e1e1e;
  border-radius: 12px;
  padding: 20px;
  color: white;
  width: 300px;
  transition: transform 0.3s ease;
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);

  &:hover {
    transform: translateY(-8px);
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
  return (
    <Card>
      <Image src={project.image} alt={project.title} />
      <Title>{project.title}</Title>
      <p>{project.description}</p>
      <Tech>{project.techStack.join(", ")}</Tech>
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
