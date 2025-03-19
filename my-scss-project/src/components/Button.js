import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: var(--primary-dark-color);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &.secondary {
    background-color: var(--secondary-color);
    &:hover {
      background-color: var(--secondary-dark-color);
    }
  }

  &.large {
    padding: 16px 32px;
    font-size: 18px;
  }

  &.small {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

const Button = ({ children, className, ...props }) => {
  return (
    <StyledButton className={className} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;