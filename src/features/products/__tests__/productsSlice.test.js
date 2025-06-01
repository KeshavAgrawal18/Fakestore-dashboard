import productsReducer, {
  setSearchQuery,
  setSelectedCategory,
  setSortOrder,
} from "../productsSlice";

describe("productsSlice reducer (simple version)", () => {
  const initialState = {
    products: [],
    filteredProducts: [],
    categories: [],
    searchQuery: "",
    selectedCategory: "all",
    sortOrder: "none",
    status: "idle",
    error: null,
  };

  it("returns the initial state", () => {
    expect(productsReducer(undefined, { type: "" })).toEqual(initialState);
  });

  it("updates searchQuery", () => {
    const newState = productsReducer(initialState, setSearchQuery("shoes"));
    expect(newState.searchQuery).toBe("shoes");
  });

  it("updates selectedCategory", () => {
    const newState = productsReducer(
      initialState,
      setSelectedCategory("books")
    );
    expect(newState.selectedCategory).toBe("books");
  });

  it("updates sortOrder", () => {
    const newState = productsReducer(initialState, setSortOrder("desc"));
    expect(newState.sortOrder).toBe("desc");
  });
});
