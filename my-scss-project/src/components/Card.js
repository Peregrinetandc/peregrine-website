import React from 'react';
import styled from 'styled-components';
import '../../assets/styles/components/_cards.scss';

const CardContainer = styled.div`
  background: var(--card-background, #fff);
  border-radius: var(--border-radius, 10px);
  box-shadow: var(--box-shadow, 0 4px 8px rgba(0, 0, 0, 0.1));
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--box-shadow-hover, 0 8px 16px rgba(0, 0, 0, 0.2));
  }
`;

const CardHeader = styled.div`
  padding: 20px;
  background: var(--header-background, #f5f5f5);
`;

const CardBody = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h3`
  font-size: var(--font-size-title, 1.5rem);
  color: var(--color-title, #333);
`;

const CardText = styled.p`
  font-size: var(--font-size-text, 1rem);
  color: var(--color-text, #666);
`;

const Card = ({ title, text }) => {
  return (
    <CardContainer>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>{text}</CardText>
      </CardBody>
    </CardContainer>
  );
};

export default Card;