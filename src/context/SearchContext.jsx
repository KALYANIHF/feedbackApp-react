import { createContext, useContext, useReducer, useState } from "react";
import searchReducer from "../reducers/searchReducers";
import GlobalContext from "./GlobalContext";
const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const searchInitialState = {
    searchquery: "",
    tag: "",
    minvalue: 1,
    maxvalue: 10,
    sort: "newest",
  };

  const {
    theme,
    themeIcon,
    rating,
    feedbackList,
    message,
    tags,
    customtag,
    anon,
    username,
    currentStateglobal,
    dispatchglobal,
  } = useContext(GlobalContext);
  const [currentState, dispatch] = useReducer(
    searchReducer,
    searchInitialState
  );
  const [feedbacks, setFeedbacks] = useState(feedbackList);
  const [ratingmin, setMinRating] = useState(currentState.minvalue);
  const [ratingmax, setMaxRating] = useState(currentState.maxvalue);
  //console.log(feedbacks);

  const handleClean = () => {
    dispatch({
      type: "SET_MINVALUE",
      payload: 1,
    });
    dispatch({
      type: "SET_MAXVALUE",
      payload: 10,
    });
    dispatch({
      type: "SET_SORT",
      payload: "Newest",
    });
    dispatch({
      type: "SET_TAGS",
      payload: "all",
    });
    dispatch({
      type: "SET_SEARCHQUERY",
      payload: "",
    });
    dispatchglobal({
      type: "SET_FEEDBACK_LIST",
      payload: feedbacks,
    });
  };
  const filterFeedbacks = (e) => {};
  const filterwithTags = () => {};
  const filterwithRating = () => {};
  const filterwithKey = (key) => {};
  const handleFromData = (e) => {
    if (e.target.name === "searchquery") {
      dispatch({
        type: "SET_SEARCHQUERY",
        payload: e.target.value,
      });
      if (e.target.value.toLowerCase().trim() == "") {
        dispatchglobal({
          type: "SET_FEEDBACK_LIST",
          payload: feedbacks,
        });
      } else {
        const newFeedback = feedbackList.filter((item) => {
          return item.name.toLowerCase().includes(e.target.value.toLowerCase());
        });
        //console.log(newFeedback);
        dispatchglobal({
          type: "SET_FEEDBACK_LIST",
          payload: newFeedback,
        });
      }
    }
    if (e.target.name === "tag") {
      //console.log(e.target.value.toLowerCase());
      dispatch({
        type: "SET_TAGS",
        payload: e.target.value,
      });
      if (e.target.value.toLowerCase().trim() !== "all") {
        // then filter with tags
        const newFeedback = feedbackList.filter((item) => {
          return item.tags.includes(e.target.value.toLowerCase());
        });
        dispatchglobal({
          type: "SET_FEEDBACK_LIST",
          payload: newFeedback,
        });
      } else {
        dispatchglobal({
          type: "SET_FEEDBACK_LIST",
          payload: feedbacks,
        });
      }
    }

    if (e.target.name === "maxvalue" || e.target.name === "minvalue") {
      dispatch({
        type: `SET_${e.target.name.toUpperCase()}`,
        payload: e.target.value,
      });
      e.target.name === "maxvalue"
        ? setMaxRating(+e.target.value + 1)
        : setMinRating(+e.target.value + 1);
      console.log(currentState.maxvalue, currentState.minvalue);
      const newFeedback = feedbackList.filter((item) => {
        return item.rating >= ratingmin && item.rating <= ratingmax;
      });
      dispatchglobal({
        type: "SET_FEEDBACK_LIST",
        payload: newFeedback,
      });
    }
    if (e.target.name === "sort") {
      dispatch({
        type: "SET_SORT",
        payload: e.target.value,
      });
    }
  };
  return (
    <SearchContext.Provider
      value={{
        searchquery: currentState.searchReducer,
        tag: currentState.tag,
        minvalue: currentState.minvalue,
        maxvalue: currentState.maxvalue,
        sort: currentState.sort,
        filterFeedbacks,
        filterwithTags,
        filterwithRating,
        filterwithKey,
        handleFromData,
        handleClean,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
