import React from "react";
import Form from "./components/Form/Form";
import Content from "./components/Content/Content";

import { useSelector } from "react-redux";

import LoadingComponent from "./components/Loading/Loading";

const App = () => {
  const Loading = useSelector((state) => state.notes.loading);
  return (
    <>
      {Loading === true ? (
        <LoadingComponent></LoadingComponent>
      ) : (
        <div className="app">
          <div className="row me-0 ms-0">
            <div className="form">
              <Form></Form>
            </div>
            <div className="filter h-100 ps-0 pe-0">
              <Content></Content>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
