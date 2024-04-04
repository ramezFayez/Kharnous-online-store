import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import SignIn from "./SignIn";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import logo from "./Logo/Untitled 3.png";

import {
  getProducts,
  hideMyCart,
  selectProducts,
  showMyCart,
} from "./features/products/productSlice";

const NavBar = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const myCart = useAppSelector(selectProducts);

  return (
    <>
      <div className="navBar">
        <div className="logo">
          <img className="myLogo" src={logo} alt="Logo" />
        </div>
        <SearchBar />
        <div className="sign-in-container">
          <SignIn />
        </div>
        <button
          className="cart"
          onClick={() => {
            dispatch(showMyCart());
          }}
        >
          <span className="cart-icon">
            <MdOutlineShoppingCart className="myCart" />
          </span>

          <span className="cart-counter">{myCart.cart.length}</span>
        </button>
        {myCart.showCart ? (
          <div className="cart-contents">
            {myCart.cart.map((item) => {
              return (
                <div className="cartItem">
                  <img className="cart-img" src={item.image} alt="product" />
                  <h4>{item.title}</h4>
                  <h1>{item.price} $</h1>
                </div>
              );
            })}
            <button
              className="checkOut"
              onClick={() => {
                dispatch(hideMyCart());
              }}
            >
              Check Out
            </button>
          </div>
        ) : undefined}
        <div className="navContent">
          <a href="" className="nav-a">
            <MdMenu className="category-icon" />
            All
          </a>
          <a href="" className="nav-a">
            Today's Deals
          </a>
          <a href="" className="nav-a">
            Customer Service
          </a>
          <a href="" className="nav-a">
            Registry
          </a>
          <a href="" className="nav-a">
            Gift Cards
          </a>
          <a href="" className="nav-a">
            Sell
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
