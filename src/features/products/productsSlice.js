import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllProducts } from "../../utils/api";

const initialState = {
  products: [],
  filteredProducts: [],
  categories: [],
  status: "idle",
  error: null,
  searchQuery: "",
  selectedCategory: "all",
  sortOrder: "none", // 'asc' or 'desc'
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await fetchAllProducts();
    return res.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    setSortOrder(state, action) {
      state.sortOrder = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
        state.categories = [
          "all",
          ...new Set(action.payload.map((p) => p.category)),
        ];
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setSearchQuery, setSelectedCategory, setSortOrder } =
  productsSlice.actions;

export const selectFilteredProducts = (state) => {
  const { products, searchQuery, selectedCategory, sortOrder } = state.products;
  let filtered = [...products];

  if (searchQuery) {
    filtered = filtered.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (selectedCategory !== "all") {
    filtered = filtered.filter(
      (product) => product.category === selectedCategory
    );
  }

  if (sortOrder === "asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "desc") {
    filtered.sort((a, b) => b.price - a.price);
  }

  return filtered;
};

export default productsSlice.reducer;
