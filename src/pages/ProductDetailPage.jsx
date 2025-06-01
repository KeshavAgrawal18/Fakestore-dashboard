import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addToFavorites } from "../features/favorites/favoritesSlice";
import styled from "styled-components";
import { fetchProductById } from "../utils/api";

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  max-width: 300px;
  object-fit: contain;
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;

const Button = styled.button`
  margin-top: 1rem;
  background: #1e90ff;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  cursor: pointer;
`;

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProductById(id).then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <Container>
      <Image src={product.image} alt={product.title} />
      <Title>{product.title}</Title>
      <p>{product.description}</p>
      <p>
        <b>${product.price}</b>
      </p>
      <Button onClick={() => dispatch(addToFavorites(product))}>
        Add to Favorites
      </Button>
    </Container>
  );
};

export default ProductDetailPage;
