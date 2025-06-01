import { render } from "@testing-library/react";
import SearchBar from "../SearchBar";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../../features/products/productsSlice";

const store = configureStore({ reducer: { products: productsReducer } });

test("renders without crashing", () => {
  render(
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );
});
