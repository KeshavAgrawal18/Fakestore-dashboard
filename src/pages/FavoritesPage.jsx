import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromFavorites,
  selectFavorites,
} from "../features/favorites/favoritesSlice";
import styled from "styled-components";

const List = styled.div`
  padding: 1rem;
`;

const Card = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  align-items: center;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
`;

const Button = styled.button`
  background: red;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
`;

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  if (!favorites.length)
    return <p style={{ padding: "1rem" }}>No favorites yet.</p>;

  return (
    <List>
      {favorites.map((product) => (
        <Card key={product.id}>
          <Image src={product.image} alt={product.title} />
          <div style={{ flex: 1 }}>
            <p>{product.title}</p>
            <p>
              <b>${product.price}</b>
            </p>
          </div>
          <Button onClick={() => dispatch(removeFromFavorites(product.id))}>
            Remove
          </Button>
        </Card>
      ))}
    </List>
  );
};

export default FavoritesPage;
