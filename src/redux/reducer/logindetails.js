const intialstate = {
  authToken: "",
  userName: "",
  isLoggedIn: false
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
     case 'IS_LOGGINUSER':
      return {
        ...state,
        isLoggedIn: action.isLoggedIn
      }
    default:
      return state;
  }
};
export default loginReducer;
