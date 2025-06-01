import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../features/products/productsSlice";
import styled from "styled-components";
import { debounce } from "../utils/debounce";

const Input = styled.input`
  margin: 1rem;
  padding: 0.75rem;
  width: 100%;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const debouncedDispatch = useRef(
    debounce((value) => {
      dispatch(setSearchQuery(value));
    }, 300),
    [dispatch]
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    debouncedDispatch(value);
  };

  return (
    <Input
      type="text"
      placeholder="Search products..."
      value={text}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
