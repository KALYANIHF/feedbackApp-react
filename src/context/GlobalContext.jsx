import { createContext, useEffect, useReducer } from "react";
import { globalReducer } from "../reducers/globalReducer";
import { toast } from "react-toastify";
const GlobalContext = createContext();
export const GlobalContextProvider = ({ children }) => {
  const initialState = {
    theme: "dark",
    feedbackList: [
      {
        id: 1,
        name: "Aarav",
        anon: false,
        rating: 8,
        tags: ["UI", "Performance"],
        msg: "The new design looks amazing, but the dashboard could load faster on mobile.",
        ts: Date.now() - 86400000 * 2,
        like: 5,
        love: 3,
        dislike: 0,
        reply: "",
      },
      {
        id: 2,
        name: "Mira",
        anon: true,
        rating: 10,
        tags: ["Performance", "Praise"],
        msg: "Super fast now! Animations are silky smooth. Keep it up 🙌",
        ts: Date.now() - 86400000 * 1.5,
        like: 8,
        love: 6,
        dislike: 0,
        reply: "Thanks for the love!",
      },
      {
        id: 3,
        name: "Dev",
        anon: false,
        rating: 6,
        tags: ["Features"],
        msg: "Would love multi-project support and bulk tagging.",
        ts: Date.now() - 86400000 * 0.8,
        like: 2,
        love: 1,
        dislike: 0,
        reply: "",
      },
      {
        id: 4,
        name: "Sara",
        anon: false,
        rating: 4,
        tags: ["Bug", "UX"],
        msg: "Ran into a bug while saving. Also the settings labels are a bit confusing.",
        ts: Date.now() - 86400000 * 0.3,
        like: 1,
        love: 0,
        dislike: 2,
        reply: "",
      },
    ],
    themeIcon: "🌙",
    rating: 10,
    message: "",
    username: "",
    tags: [],
    customtag: [],
    anon: false,
  };
  const [currentState, dispatch] = useReducer(globalReducer, initialState);
  const toggleTheme = () => {
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
      if (currentState.anon) {
        dispatch({
          type: "SET_NAME",
          payload: "",
        });
      }
    } else if (e.target.name === "username") {
      dispatch({
        type: "SET_NAME",
        payload: e.target.value,
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

    const newFeedback = {
      id: currentState.feedbackList.length + 1,
      rating: currentState.rating,
      anon: currentState.anon,
      msg: currentState.message,
      tags: [currentState.tags],
      ts: Date.now() - 86400000 * 2,
      like: 5,
      love: 3,
      dislike: 0,
      reply: "",
    };
    if (!currentState.anon) {
      newFeedback.name = currentState.username;
    }
    if (currentState.customtag !== "") {
      newFeedback.tags.push(currentState.customtag);
    }

    createFeedback(newFeedback);
    handleReset();
  };

  const handleReset = (e) => {
    // clear the form data
    dispatch({
      type: "SET_RATING",
      payload: 10,
    });
    dispatch({
      type: "SET_MESSAGE",
      payload: "",
    });
    dispatch({
      type: "SET_TAGS",
      payload: [],
    });
    dispatch({
      type: "SET_CUSTOMTAG",
      payload: [],
    });
    dispatch({
      type: "SET_ANON",
      payload: false,
    });
    dispatch({
      type: "SET_NAME",
      payload: "",
    });
  };
  const createFeedback = (newFeedback) => {
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
    if (newFeedback !== "") {
      dispatch({
        type: "SET_FEEDBACK_LIST",
        payload: [...currentState.feedbackList, newFeedback],
      });
    } else {
      toast.error("Something went wrong not able to create feedback");
    }
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
        username: currentState.username,
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
