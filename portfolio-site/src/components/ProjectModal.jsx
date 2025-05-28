import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const Modal = styled.div`
  background: #1e1e1e;
  color: white;
  border-radius: 10px;
  max-width: 600px;
  width: 90%;
  padding: 2rem;
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.1);
  position: relative;
`;

const Close = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: #aaa;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Close onClick={onClose}>×</Close>
        <h2>{project.title}</h2>
        <p style={{ marginTop: '1rem', lineHeight: 1.6 }}>{project.description}</p>
        <div style={{ marginTop: '1.5rem' }}>
          <a href={project.github} target="_blank" rel="noreferrer" style={{ marginRight: '1rem', color: '#4fc3f7' }}>GitHub</a>
          <a href={project.demo} target="_blank" rel="noreferrer" style={{ color: '#4fc3f7' }}>Live Demo</a>
        </div>
      </Modal>
    </Overlay>
  );
}
