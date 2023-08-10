export const login = (userName, token) => {
  return {
    type: "LOGIN_SUCCESS",
    authToken: token,
    userName: userName,
  };
};

export const logout = () => {
  return {
    type: "LOGOUT_SUCCESS",
  };
};

export const otpstore = (genotp) => {
  return {
    type: "OTP GENRATE",
    OTP: genotp,
  };
};

export const otpstoredelete = (data) => {
  return {
    type: "OTP DELETE",
    isLoggedIn: data
  };
};

export const isLoggingStatus = (data) => {
  return {
    type: "IS_LOGGINUSER",
    isLoggedIn: data
  };
};
