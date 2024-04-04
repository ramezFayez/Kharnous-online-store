import React from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  addUser,
  handleSignInPasswordInput,
  handleSignInUserNameInput,
  handleSignUpPasswordInput,
  handleSignUpUserNameInput,
  selectUsers,
  signIn,
  signOut,
  signUp,
} from "./features/products/userSlice";

const SignIn = (): JSX.Element => {
  const allUsers = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  return (
    <>
      <div>
        <div className="sign-in">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              className="signIN-signUp-Inputs"
              type="text"
              placeholder="user name"
              onChange={(e) => {
                dispatch(handleSignInUserNameInput(e));
              }}
            />
            <input
              className="signIN-signUp-Inputs"
              type="password"
              placeholder="password"
              onChange={(e) => {
                dispatch(handleSignInPasswordInput(e));
              }}
            />
            <button
              className="sign-in-button"
              onClick={() => {
                dispatch(signIn(allUsers.userName && allUsers.password));
              }}
            >
              Sign in
            </button>
            {allUsers.SignInClick && allUsers.signInText ? (
              <div>
                Welcome {allUsers.userName}
                <button
                  onClick={() => {
                    //@ts-ignore
                    dispatch(signOut());
                  }}
                >
                  Sign Out
                </button>
              </div>
            ) : allUsers.SignInClick && allUsers.signInText === false ? (
              <div>username or password is incorrect</div>
            ) : undefined}
            <button
              className="createAccount"
              onClick={() => {
                //@ts-ignore
                dispatch(signUp());
              }}
            >
              Create your account
            </button>
            {allUsers.showSignUp ? (
              <div className="signUp">
                <form>
                  <input
                    className="signIN-signUp-Inputs"
                    type="text"
                    placeholder="Enter new user name"
                    onChange={(e) => {
                      dispatch(handleSignUpUserNameInput(e));
                    }}
                  />
                  <input
                    className="signIN-signUp-Inputs"
                    type="password"
                    placeholder="Enter new password"
                    onChange={(e) => {
                      dispatch(handleSignUpPasswordInput(e));
                    }}
                  />
                  <button
                    className="sign-in-button"
                    onClick={() => {
                      //@ts-ignore
                      dispatch(addUser());
                    }}
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            ) : undefined}
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
