import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Product } from "../../types";
import { useEffect } from "react";

type User = {
  name: String;
  pass: String;
};

const newUserName: string = "";
const newPassword: string = "";
const showSignUp: boolean = false;
const userName: string = "";
const password: string = "";
const newUsers: User[] = [];
const signInText: boolean = false;
const SignInClick: boolean = false;

// useEffect(() => {
//   localStorage.setItem("newUsers", JSON.stringify(newUsers));
// }, [newUsers]);

// const initialNewUsers = localStorage.getItem("newUsers")
//   ? JSON.parse(localStorage.getItem("newUsers"))
//   : [];

export const userSlice = createSlice({
  name: "users",
  initialState: {
    newUsers,
    newUserName,
    newPassword,
    showSignUp,
    userName,
    password,
    signInText,
    SignInClick,
  },
  reducers: {
    signUp: (state) => {
      state.showSignUp = true;
    },
    handleSignUpUserNameInput: (state, action) => {
      state.newUserName = action.payload.target.value;
    },
    handleSignUpPasswordInput: (state, action) => {
      state.newPassword = action.payload.target.value;
    },
    addUser: (state) => {
      const singleNewUser = {
        name: state.newUserName,
        pass: state.newPassword,
      };
      state.newUsers.push(singleNewUser);
      state.showSignUp = false;
    },
    handleSignInUserNameInput: (state, action) => {
      state.userName = action.payload.target.value;
    },
    handleSignInPasswordInput: (state, action) => {
      state.password = action.payload.target.value;
    },

    signIn: (state, action) => {
      state.SignInClick = true;
      if (state.newUsers.includes(action.payload)) {
        state.signInText = true;
      } else {
        state.signInText = false;
      }
    },
    signOut: (state) => {
      state.SignInClick = false;
    },
  },
});

export const {
  signUp,
  handleSignUpUserNameInput,
  handleSignUpPasswordInput,
  addUser,
  handleSignInUserNameInput,
  handleSignInPasswordInput,
  signIn,
  signOut,
} = userSlice.actions;

export const selectUsers = (state: RootState) => state.users;

export default userSlice.reducer;
