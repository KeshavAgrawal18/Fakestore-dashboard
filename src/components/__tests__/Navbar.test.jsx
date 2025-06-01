import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";
import { MemoryRouter } from "react-router";

const renderNavbar = () =>
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

describe("Navbar", () => {
  it("renders without crashing", () => {
    renderNavbar();
  });

  it("displays navigation links", () => {
    renderNavbar();
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/favorites/i)).toBeInTheDocument();
  });
});
