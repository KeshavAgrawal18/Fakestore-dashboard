import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import App from "../../App";

beforeAll(() => {
  global.fetch = jest.fn((url) => {
    if (url.includes("categories")) {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(["men's clothing"]),
      });
    }

    return Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve([
          {
            id: 1,
            title: "Mens Cotton Jacket",
            price: 55.99,
            category: "men's clothing",
            image: "https://via.placeholder.com/150",
            description: "A nice jacket",
          },
        ]),
    });
  });
});

afterEach(() => {
  jest.clearAllMocks();
});

function renderApp() {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}

test("renders a product from API", async () => {
  renderApp();

  await waitFor(() => {
    expect(screen.getByText(/mens cotton jacket/i)).toBeInTheDocument();
  });
});
