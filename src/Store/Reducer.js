export const Reducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, isSignedIn: action.payload };
    case "SIGN_OUT":
      return {
        ...state,
        isSignedIn: action.payload,
        userData: {},
        favorites: [],
        submissions: []
      };
    case "ADD_USER":
      return { ...state, userData: action.payload };
    case "ADD_USER_FAVORITES":
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    case "ADD_USER_SUBMISSIONS":
      return {
        ...state,
        submissions: [...state.submissions, action.payload]
      };
    default:
      return state;
  }
};
