import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import ProductDetailPage from "../ProductDetailPage";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { MemoryRouter, Route, Routes } from "react-router";

jest.mock("../../utils/api", () => ({
  fetchProductById: async () => ({
    data: {
      id: 1,
      title: "Mock Product",
      price: 100,
      description: "Mock Description",
      image: "https://via.placeholder.com/150",
    },
  }),
}));

describe("ProductDetailPage (simple)", () => {
  it("shows mock product after loading", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/product/1"]}>
          <Routes>
            <Route path="/product/:id" element={<ProductDetailPage />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText("Mock Product")).toBeInTheDocument();
    });
  });
});
