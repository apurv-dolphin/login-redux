const intialstate = {
  authToken: "",
  userName: "",
};

const loginReducer = (state = intialstate, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        authToken: action.authToken,
        userName: action.userName.Email,
      };
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        authToken: "",
        userName: "",
      };
    default:
      return state;
  }
};
export default loginReducer;
