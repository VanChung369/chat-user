import AuthenticationReducer, {
  namespace as AuthenticationNameSpace,
} from "./authentication/slice";
import { combineReducers } from "redux";

export default combineReducers({
  [AuthenticationNameSpace]: AuthenticationReducer,
});
