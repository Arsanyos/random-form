import * as Yup from "yup";

export const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, "Name is too short")
    .max(20, "Name is too long")
    .required("Name filed is required"),
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
    .required("Email is required"),
  age: Yup.number()
    .min(10, "Underaage")
    .max(90, "Too old man")
    .required("Age is a required filed"),
  photo: Yup.string().required("Photo filed is required"),
});
