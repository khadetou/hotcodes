import { combineReducers } from "redux";
import authReducer from "./authReducers";
const reducers = combineReducers({
  authReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
