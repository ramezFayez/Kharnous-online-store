import React from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { IoSearch } from "react-icons/io5";
import {
  searchForProduct,
  selectProducts,
} from "./features/products/productSlice";

const SearchBar = (): JSX.Element => {
  const selectSearch = useAppSelector(selectProducts);

  const dispatch = useAppDispatch();

  return (
    <>
      <div>
        <form>
          <input
            className="searchBar"
            type="search"
            placeholder="Search for Product"
            onChange={(e) => {
              dispatch(searchForProduct(e));
            }}
          />
        </form>

        <IoSearch className="search-icon" />
      </div>
    </>
  );
};

export default SearchBar;
