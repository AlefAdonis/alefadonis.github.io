import React from "react";
import { Helmet } from "react-helmet";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="app">
      <Helmet bodyAttributes={{ style: "background-color : #5CDB95" }} />
      <Header />
    </div>
  );
};

export default App;
