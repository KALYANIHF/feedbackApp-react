const initialState = {
  theme: "light",
};
const themeReducer = (initialState, action) => {
  switch (action.type) {
    case "SET_THEME":
      return { ...initialState, theme: action.payload };
    default:
      return initialState;
  }
};
