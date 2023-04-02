import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import fromReducer from "./form/form.slice";
export const store = configureStore({
  reducer: {
    form: fromReducer,
  },

});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);
