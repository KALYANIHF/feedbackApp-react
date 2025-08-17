const globalReducer = (initialState, action) => {
  switch (action.type) {
    case "SET_THEME":
      return {
        ...initialState,
        theme: initialState.theme === "dark" ? "light" : "dark",
      };
    case "SET_THEME_ICON":
      return { ...initialState, themeIcon: action.payload };
    case "SET_RATING":
      return { ...initialState, rating: action.payload };
    case "SET_MESSAGE":
      return { ...initialState, message: action.payload };
    case "SET_TAGS":
      return { ...initialState, tags: action.payload };
    case "SET_CUSTOMTAG":
      return { ...initialState, customtag: action.payload };
    case "SET_NAME":
      return { ...initialState, username: action.payload };
    case "SET_ANON":
      return { ...initialState, anon: action.payload };
    case "SET_FEEDBACK_LIST":
      return { ...initialState, feedbackList: action.payload };
    default:
      return initialState;
  }
};

export { globalReducer };
