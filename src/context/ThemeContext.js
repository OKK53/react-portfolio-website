import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const INITIAL_STATE = { mode: localStorage.getItem("mode") || "light" };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      const mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("mode", mode);
      return { ...state, mode };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

  const data = {
    state,
    dispatch,
  };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
