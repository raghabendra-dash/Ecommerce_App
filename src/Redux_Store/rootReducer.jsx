import WishlistReducer from "./reducers/WishlistReducer";
import CartReducer from "./reducers/CartReducer";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  CartReducer,
  WishlistReducer,
});

export default rootReducer;
