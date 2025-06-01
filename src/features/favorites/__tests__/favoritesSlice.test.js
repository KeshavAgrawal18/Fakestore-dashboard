import favoritesReducer, {
  addToFavorites,
  removeFromFavorites,
} from "../favoritesSlice";

describe("favoritesSlice (simple)", () => {
  const initialState = { items: [] };
  const product = { id: 1, title: "Test Product" };

  it("returns initial state", () => {
    expect(favoritesReducer(undefined, {})).toEqual(initialState);
  });

  it("adds a product", () => {
    const state = favoritesReducer(initialState, addToFavorites(product));
    expect(state.items.length).toBe(1);
  });

  it("removes a product", () => {
    const state = favoritesReducer(
      { items: [product] },
      removeFromFavorites(product.id)
    );
    expect(state.items).toEqual([]);
  });
});
