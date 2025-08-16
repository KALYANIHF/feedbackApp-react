import { createContext, useReducer } from "react";
import { globalReducer } from "../reducers/globalReducer";
const GlobalContext = createContext();
export const GlobalContextProvider = ({ children }) => {
  const initialState = {
    theme: "dark",
    rating: 10,
    feedbackList: [],
    themeIcon: "🌙",
  };
  const [currentState, dispatch] = useReducer(globalReducer, initialState);
  const toggleTheme = () => {
    dispatch({
      type: "SET_THEME",
      payload: currentState.theme === "light" ? "dark" : "light",
    });
    document.body.className = currentState.theme;
  };
  return (
    <GlobalContext.Provider
      value={{
        theme: currentState.theme,
        themeIcon: currentState.themeIcon,
        rating: currentState.rating,
        feedbackList: currentState.feedbackList,
        toggleTheme,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
