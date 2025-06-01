import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ProductListingPage from "../ProductListingPage";

jest.mock("../../components/ProductCard", () => ({ product }) => (
  <div data-testid="product-card">{product.name}</div>
));
jest.mock("../../components/SearchBar", () => () => <div>SearchBar</div>);
jest.mock("../../components/FilterPanel", () => () => <div>FilterPanel</div>);

jest.mock("../../features/products/productsSlice", () => ({
  fetchProducts: () => ({ type: "products/fetch" }),
  selectFilteredProducts: () => [{ id: 1, name: "Test Product" }],
}));

const mockStore = configureStore([]);

describe("ProductListingPage", () => {
  it("renders SearchBar, FilterPanel and ProductCard", () => {
    const store = mockStore({ products: { status: "idle" } });

    render(
      <Provider store={store}>
        <ProductListingPage />
      </Provider>
    );

    expect(screen.getByText("SearchBar")).toBeInTheDocument();
    expect(screen.getByText("FilterPanel")).toBeInTheDocument();
    expect(screen.getByTestId("product-card")).toHaveTextContent(
      "Test Product"
    );
  });

  it("shows loading text when products are loading", () => {
    const store = mockStore({ products: { status: "loading" } });

    render(
      <Provider store={store}>
        <ProductListingPage />
      </Provider>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
