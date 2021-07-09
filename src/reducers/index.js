import { combineReducers } from "redux";

import appConfigReducer from "reducers/appConfig/appConfigReducer";
import navReducer from "reducers/nav/navReducer";

export default combineReducers({
  appConfig: appConfigReducer,
  nav: navReducer,
});
