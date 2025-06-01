import React from "react";
import { render, screen } from "@testing-library/react";
import FavoritesPage from "../FavoritesPage";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../../features/favorites/favoritesSlice";

const mockProduct = {
  id: 1,
  title: "Favorite Product",
  price: 99,
  image: "https://via.placeholder.com/150",
};

const renderWithSimpleStore = (items) => {
  const store = configureStore({
    reducer: { favorites: favoritesReducer },
    preloadedState: { favorites: { items } },
  });

  render(
    <Provider store={store}>
      <MemoryRouter>
        <FavoritesPage />
      </MemoryRouter>
    </Provider>
  );
};

describe("FavoritesPage (simple)", () => {
  it("shows 'no favorite products' when list is empty", () => {
    renderWithSimpleStore([]);
    expect(screen.getByText(/no favorite/i)).toBeInTheDocument();
  });

  it("shows product title when favorite exists", () => {
    renderWithSimpleStore([mockProduct]);
    expect(screen.getByText("Favorite Product")).toBeInTheDocument();
  });
});
