import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer"
import authenticateReducer from "./reducers/authenticateReducer";

// combinereducer
// thunk
// applyMiddleware
// composeWithDevTool

const store = configureStore({
  reducer:{
    auth : authenticateReducer,
    product : productReducer
  }
})
export default store;