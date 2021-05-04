import React, { useReducer } from "react";
import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_OUT,
  SIGN_UP,
  FORGOT_PASS,
} from "./action.type";
import { AuthContext } from "./auth.context";
const isBrowser = typeof window !== "undefined";
const INITIAL_STATE = {
  isAuthenticated: isBrowser && !!localStorage.getItem("ch-cu"),
  currentForm: "signIn",
};

function reducer(state: any, action: any) {
  console.log(state, "auth");

  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        currentForm: "signIn",
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case SIGN_OUT:
      return {
        ...state,
        isAuthenticated: false,
      };
    case SIGN_UP:
      return {
        ...state,
        currentForm: "signUp",
      };
    case FORGOT_PASS:
      return {
        ...state,
        currentForm: "forgotPass",
      };
    default:
      return state;
  }
}

export const AuthProvider: React.FunctionComponent = ({ children }) => {
  const [authState, authDispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
