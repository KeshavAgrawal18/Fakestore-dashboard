import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FilterPanel from "../FilterPanel";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

// Simple mock actions
jest.mock("../../features/products/productsSlice", () => ({
  setSelectedCategory: (value) => ({
    type: "setSelectedCategory",
    payload: value,
  }),
  setSortOrder: (value) => ({ type: "setSortOrder", payload: value }),
}));

const mockStore = configureStore([]);

describe("FilterPanel", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      products: {
        categories: ["all", "electronics", "books"],
      },
    });

    store.dispatch = jest.fn();
  });

  test("renders dropdowns and dispatches on change", () => {
    render(
      <Provider store={store}>
        <FilterPanel />
      </Provider>
    );

    // Ensure both dropdowns are rendered
    const selects = screen.getAllByRole("combobox");
    expect(selects.length).toBe(2);

    // Trigger a category change
    fireEvent.change(selects[0], { target: { value: "books" } });
    expect(store.dispatch).toHaveBeenCalledWith({
      type: "setSelectedCategory",
      payload: "books",
    });

    // Trigger a sort order change
    fireEvent.change(selects[1], { target: { value: "asc" } });
    expect(store.dispatch).toHaveBeenCalledWith({
      type: "setSortOrder",
      payload: "asc",
    });
  });
});
