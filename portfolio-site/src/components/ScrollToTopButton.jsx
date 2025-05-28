import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ArrowUpCircle } from 'lucide-react'; // 🔥 Cleaner icon

const Button = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  display: ${({ show }) => (show ? 'block' : 'none')};
  z-index: 1000;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button onClick={scrollToTop} show={showButton} aria-label="Scroll to top">
      <ArrowUpCircle size={52} color="#4fc3f7" strokeWidth={3.5} />
    </Button>
  );
}
