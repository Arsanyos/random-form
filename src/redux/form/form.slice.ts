import { createSlice } from "@reduxjs/toolkit";
import { FormValues } from "../../interface/form.interface";

const initialState: FormValues = {
  name: null,
  email: null,
  age: null,
  photo: null,
};
export const formSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {
    setFormValues: (state, action) => {
      const { name, email, age, photo } = action.payload;
      state.email = email;
      state.name = name;
      state.age = age;
      state.photo = photo;
    },
    selectFormValues: (state, action) => {},
  },
});
export const { setFormValues } = formSlice.actions;
export default formSlice.reducer;
