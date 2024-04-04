import React, { useEffect } from "react";
import {
  addToCart,
  getProducts,
  selectProducts,
} from "./features/products/productSlice";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { Product } from "./types";

const OurProducts = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const productsArray = useAppSelector(selectProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const product = (item: Product) => {
    return (
      <div className="product">
        <img src={item.image} alt="product" />
        <h4>{item.title}</h4>
        <h1>{item.price} $</h1>
        <button
          className="addToCart"
          onClick={() => {
            dispatch(addToCart(item.id));
          }}
        >
          Add to Cart
        </button>
      </div>
    );
  };

  return (
    <>
      <div>
        {productsArray.showSearchResult ? (
          <span className="ProductsBackGround">
            {productsArray.list
              .filter((item) => {
                if (
                  item.title
                    .toLowerCase()
                    .includes(productsArray.search.toLowerCase())
                ) {
                  return item;
                } else if (productsArray.search === "") {
                  return item;
                }
              })
              .map((item, index) => {
                return product(item);
              })}
          </span>
        ) : (
          <span className="ProductsBackGround">
            {productsArray.list.map((item, index) => {
              return product(item);
            })}
          </span>
        )}
      </div>
    </>
  );
};

export default OurProducts;
