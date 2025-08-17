import { createContext, useEffect, useReducer } from "react";
import { globalReducer } from "../reducers/globalReducer";
import { toast } from "react-toastify";
const GlobalContext = createContext();
export const GlobalContextProvider = ({ children }) => {
  const initialState = {
    theme: "dark",
    feedbackList: [],
    themeIcon: "🌙",
    rating: 10,
    message: "",
    tags: [],
    customtag: [],
    anon: false,
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
  const handleFromData = (e) => {
    if (e.target.name === "rating") {
      dispatch({
        type: "SET_RATING",
        payload: +e.target.value,
      });
    } else if (e.target.name === "message") {
      dispatch({
        type: "SET_MESSAGE",
        payload: e.target.value,
      });
    } else if (e.target.name === "tags") {
      dispatch({
        type: "SET_TAGS",
        payload: e.target.value,
      });
    } else if (e.target.name === "customtag") {
      dispatch({
        type: "SET_CUSTOMTAG",
        payload: e.target.value,
      });
    } else if (e.target.name === "anon") {
      dispatch({
        type: "SET_ANON",
        payload: !currentState.anon,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validate the form data and add validation to check if there is any misleading data in the formdata
    /**
     * first validate the rating value
     */
    if (currentState.rating < 1 || currentState.rating > 10) {
      toast.error("Rating must be between 1 and 10");
      return;
    }
    /**
     * validate the message box
     */
    if (currentState.message === "") {
      toast.error("Message cannot be empty");
      return;
    }
    /**
     * validate the tags
     */
    if (currentState.tags === "") {
      toast.error("tags cannot be empty");
      return;
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFormData({
      rating: 10,
      message: "",
      tags: [],
      customtag: [],
      anon: false,
    });
  };
  const createFeedback = () => {
    // Implement the logic to create feedback here
    /**
     * get the rating value form the form
     * get the feedback message
     * get all the tags
     * get if the user is anonymous or not
     * if not get the user name
     * create a new feedback object with the above details
     * add the new feedback object to the feedbackList array
     * dispatch the action to update the state with the new feedback list
     * return the new feedback object
     *
     */
  };

  return (
    <GlobalContext.Provider
      value={{
        theme: currentState.theme,
        themeIcon: currentState.themeIcon,
        rating: currentState.rating,
        feedbackList: currentState.feedbackList,
        message: currentState.message,
        tags: currentState.tags,
        customtag: currentState.customtag,
        anon: currentState.anon,
        toggleTheme,
        handleFromData,
        handleSubmit,
        handleReset,
        createFeedback,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
