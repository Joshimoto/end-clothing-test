import { combineReducers } from "redux";

import navReducer from "reducers/nav/navReducer";

export default combineReducers({
  nav: navReducer,
});
