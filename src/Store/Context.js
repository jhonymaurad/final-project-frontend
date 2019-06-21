import React, { createContext, useReducer } from "react";
import { Reducer } from "./Reducer";

export const Context = createContext();

const initialState = {
  isSignedIn: false,
  userData: {},
  favorites: [],
  submissions: []
};

export const ContextProvider = props => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const value = { state, dispatch };
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};
