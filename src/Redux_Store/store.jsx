import { legacy_createStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const myStore = legacy_createStore(rootReducer);

export default myStore;
