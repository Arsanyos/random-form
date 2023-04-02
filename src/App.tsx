import React from "react";
import Form from "./components/Form";
import "./styles/common.css";
import { Provider } from "react-redux";
import { store } from "./redux/stores";
function App() {
  return (
    <>
      <Provider store={store}>
        <Form />
      </Provider>
    </>
  );
}

export default App;
