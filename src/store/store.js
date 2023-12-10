import { combineReducers, configureStore } from "@reduxjs/toolkit";
import messageSlice from "./Messages/messageSlice";

const rootRducer = combineReducers({
  messages: messageSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootRducer,
  });
};
