import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

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
  max-width: 700px;
  width: 90%;
  padding: 2rem;
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.1);
  animation: ${fadeIn} 0.3s ease forwards;
  position: relative;
  overflow-y: auto;
  max-height: 90vh;
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
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Close onClick={onClose}>×</Close>
        <h2>{project.title}</h2>
        <p style={{ marginTop: '1rem', color: '#ccc' }}>{project.summary}</p>

        <h4 style={{ marginTop: '1.5rem' }}>Use Case</h4>
        <p>{project.useCase}</p>

        <h4 style={{ marginTop: '1.5rem' }}>Features</h4>
        <ul>
          {project.features?.map((feat, idx) => (
            <li key={idx}>{feat}</li>
          ))}
        </ul>

        <div style={{ marginTop: '1.5rem' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            style={{ marginRight: '1rem', color: '#4fc3f7' }}
          >
            GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              style={{ color: '#4fc3f7' }}
            >
              Live Demo
            </a>
          )}
        </div>
      </Modal>
    </Overlay>
  );
}
