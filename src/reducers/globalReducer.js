const globalReducer = (initialState, action) => {
  switch (action.type) {
    case "SET_THEME":
      return { ...initialState, theme: action.payload };
    case "SET_THEME_ICON":
      return { ...initialState, themeIcon: action.payload };
    case "SET_RATING":
      return { ...initialState, rating: action.payload };
    case "SET_FEEDBACK_LIST":
      return { ...initialState, feedbackList: action.payload };
    default:
      return initialState;
  }
};

export { globalReducer };
