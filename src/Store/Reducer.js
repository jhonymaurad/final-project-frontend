export const Reducer = (state, action) => {
  switch (action.type) {
    case "SIGN_OUT":
      return { ...state, isSignedIn: action.payload };
    default:
      return state;
  }
};
