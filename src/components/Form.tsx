import {
  Button,
  Container,
  FormControl,
  FormLabel,
  TextField,
  FormHelperText,
} from "@mui/material";
import { Formik } from "formik";
import styles from "../styles/Main.module.css";
//interface
import { FormValues } from "../interface/form.interface";
//schema
import { FormSchema } from "../schema/form.schema";
//
import { setFormValues } from "../redux/form/form.slice";
import { useAppDispatch } from "../redux/hooks";
const Form = () => {
  const dispatch = useAppDispatch();
  const initialValues: FormValues = {
    name: null,
    email: null,
    age: null,
    photo: null,
  };
  const initialErrors = {
    name: "",
    email: "",
    age: "",
    photo: "",
  };
  return (
    <Container sx={{ width: "50vw" }} className={styles.mainContainer}>
      <Formik
        initialValues={initialValues}
        initialErrors={initialErrors}
        validationSchema={FormSchema}
        onSubmit={(e) => {
          console.log(e);
        }}
      >
        {({
          errors,
          values,
          touched,
          handleBlur,
          handleChange,
          setFieldValue,
        }) => (
          <form className={styles.formContainer}>
            <>
              {console.log("values", values)}
              {console.log("errors", errors)}
            </>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <TextField
                type="string"
                name="name"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {touched.name && errors.name && (
                <FormHelperText>{errors.name}</FormHelperText>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <TextField
                type="string"
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {touched.email && errors.email && (
                <FormHelperText>{errors.email}</FormHelperText>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Age</FormLabel>
              <TextField
                type="number"
                name="age"
                value={values.age}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {touched.age && errors.age && (
                <FormHelperText>{errors.age}</FormHelperText>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Photo</FormLabel>
              <TextField
                type="file"
                name="photo"
                value={values.photo}
                onBlur={handleBlur}
                onChange={(e) => {
                  setFieldValue("photo", e.target.value);
                }}
              />
              {touched.photo && errors.photo && (
                <FormHelperText>{errors.photo}</FormHelperText>
              )}
            </FormControl>
            <Button
              disabled={Object.keys(errors).length > 0 ? true : false}
              //   className={styles.submitButton}
              sx={{
                background: "rgba(255, 0, 63 ,0.5)",
                color: "white",
                ":hover": {
                  background: "rgba(255, 0, 63)",
                },
              }}
              onClick={() => {
                dispatch(setFormValues(values));
              }}
            >
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </Container>
  );
};
export default Form;
