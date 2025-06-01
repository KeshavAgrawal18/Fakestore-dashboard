import React from "react";
import { render } from "@testing-library/react";
import ProductCard from "../ProductCard";
import { MemoryRouter } from "react-router";

test("renders ProductCard", () => {
  render(
    <MemoryRouter>
      <ProductCard product={{ id: 1, image: "", title: "Test", price: 0 }} />
    </MemoryRouter>
  );
});
