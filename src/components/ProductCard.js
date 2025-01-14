import React from 'react';
import styled from 'styled-components';
import fundoImage from '../assets/fundo.png';

const CardContainer = styled.div`
  background: linear-gradient(180deg, #011e3b, #1b2d40);
  border: 1px solid #ccc;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 300px;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 15px;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #ddba33;
`;

const Description = styled.p`
  font-size: 14px;
  margin-top: 10px;
`;

const ProductCard = ({ title, price, image, description }) => {
  return (
    <CardContainer>
      <ProductImage src={image || fundoImage} alt={title} />
      <CardContent>
        <Title>{title}</Title>
        <Price>{price}</Price>
        <Description>{description}</Description>
      </CardContent>
    </CardContainer>
  );
};

export default ProductCard;

