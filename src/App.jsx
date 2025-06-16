import React from "react";
import Sidebar from "./components/Sidebar/Sidebar"; // <-- updated path
import Main from "./components/Main/Main";

const App = () => {
  return (
    <React.Fragment>
      <Sidebar />
      <Main />
    </React.Fragment>
  );
};

export default App;
