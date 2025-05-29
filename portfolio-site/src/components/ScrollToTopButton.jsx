import React from "react";
import styled from "styled-components";
import { ArrowUp } from "lucide-react"; // ✅ bold icon

const ScrollButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: #4fc3f7;
  border: none;
  border-radius: 50%;
  padding: 0.75rem;
  width: 48px;
  height: 48px;
  display: ${(props) => (props.$show ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 999;

  &:hover {
    background-color: #29b6f6;
  }

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
  }
`;

export default function ScrollToTopButton({ show }) {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ScrollButton $show={show} onClick={handleClick}>
      <ArrowUp size={20} />
    </ScrollButton>
  );
}
