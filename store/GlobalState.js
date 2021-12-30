import { createContext, useEffect, useReducer, useState } from "react";
import reducers from "./Reducers";
import { getData } from "../utils/fecthData";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialState = { notify: {}, auth: {}, cart: [], modal: [] };
  const [state, dispatch] = useReducer(reducers, initialState);
  const { cart, auth } = state;

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      getData("auth/accessToken").then((res) => {
        if (res.err) return localStorage.removeItem("firstLogin");
        dispatch({
          type: "AUTH",
          payload: {
            token: res.access_token,
            user: res.user,
          },
        });
      });
    }
  }, []);

  useEffect(() => {
    const __next__cart__beeyou = JSON.parse(
      localStorage.getItem("__next__cart__beeyou")
    );

    if (__next__cart__beeyou)
      dispatch({ type: "ADD_CART", payload: __next__cart__beeyou });
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("__next__cart__beeyou", JSON.stringify(cart));
    } else if (cart.length === 0) {
      localStorage.removeItem("__next__cart__beeyou");
    }
  }, [cart]);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
