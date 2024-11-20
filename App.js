import React from "react";
import { BrowserRouter } from "react-router-dom";
import DefaultLayout from "./component/layout/DefaultLayout";


function App() {
  return (
    <BrowserRouter>
      <DefaultLayout />
    </BrowserRouter>
  );
}

export default App;
