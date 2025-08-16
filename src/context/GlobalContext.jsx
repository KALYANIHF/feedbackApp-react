import { createContext, useEffect, useReducer } from "react";
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
    console.log(currentState.theme);
    if (currentState.theme === "dark") {
      dispatch({
        type: "SET_THEME",
      });
      dispatch({
        type: "SET_THEME_ICON",
        payload: "☀️",
      });
    } else {
      dispatch({
        type: "SET_THEME",
      });
      dispatch({
        type: "SET_THEME_ICON",
        payload: "🌙",
      });
    }
  };
  const createFeedback = () => {};

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
