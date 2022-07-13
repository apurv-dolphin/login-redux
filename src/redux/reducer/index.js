import { combineReducers } from "redux";
import loginReducer from "./logindetails";
import otpReducer from "./otpreducer";

const rootReducer = combineReducers({
  loginReducer,
  otpReducer,
});

export default rootReducer;
