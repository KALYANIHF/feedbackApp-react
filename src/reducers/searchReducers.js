const searchReducer = (initialState, action) => {
  switch (action.type) {
    case "SET_SEARCHQUERY":
      return { ...initialState, searchquery: action.payload };
    case "SET_TAGS": {
      return { ...initialState, tag: action.payload };
    }
    case "SET_MINVALUE": {
      return { ...initialState, minvalue: +action.payload };
    }
    case "SET_MAXVALUE": {
      return { ...initialState, maxvalue: +action.payload };
    }
    case "SET_SORT": {
      return { ...initialState, sort: action.payload };
    }
    default:
      return initialState;
  }
};
export default searchReducer;
