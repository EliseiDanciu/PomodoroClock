import { combineReducers } from "redux";
import clockReducer from "./clockReducer.js";

export default combineReducers({
	clock: clockReducer
});
