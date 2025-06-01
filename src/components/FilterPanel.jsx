import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedCategory,
  setSortOrder,
} from "../features/products/productsSlice";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0 1rem;
  flex-wrap: wrap;
`;

const Select = styled.select`
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const FilterPanel = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.products.categories);

  return (
    <Wrapper>
      <Select onChange={(e) => dispatch(setSelectedCategory(e.target.value))}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat.toUpperCase()}
          </option>
        ))}
      </Select>

      <Select onChange={(e) => dispatch(setSortOrder(e.target.value))}>
        <option value="none">Sort by</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </Select>
    </Wrapper>
  );
};

export default FilterPanel;
