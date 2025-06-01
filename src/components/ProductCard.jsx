import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  padding: 1rem;
`;

const Content = styled.div`
  padding: 1rem;
`;

const Title = styled.h2`
  font-size: 1rem;
  margin: 0 0 0.5rem;
`;

const Price = styled.p`
  font-weight: bold;
  margin: 0;
`;

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <Card>
        <Image src={product.image} alt={product.title} />
        <Content>
          <Title>{product.title}</Title>
          <Price>${product.price}</Price>
        </Content>
      </Card>
    </Link>
  );
};

export default ProductCard;
