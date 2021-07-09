import { FETCH_NAV, SET_NAV_ERROR } from "actions/nav/navTypes";
import navData from "data/nav/nav-data";

const initialState = {
  navCategories: navData.categories,
  isLoaded: false,
  error: false,
};

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NAV:
      return {
        navCategories: [...state.entries, ...action.payload],
        isLoaded: true,
      };
    case SET_NAV_ERROR:
      return { ...state, error: true };
    default:
      return state;
  }
};

export default navReducer;
