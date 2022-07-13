const intialotp = {
  OTP: "",
};
const otpReducer = (state = intialotp, action) => {
  switch (action.type) {
    case "OTP GENRATE":
      console.log(action.OTP);
      return {
        ...state,
        OTP: action.OTP,
      };
    case "OTP DELETE":
      return {
        ...state,
        OTP: "",
      };
    default:
      return state;
  }
};

export default otpReducer;
