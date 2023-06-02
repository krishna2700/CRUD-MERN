import React from "react";
import AddUser from "./Components/AddUser";
import "./App.css";
import NavBar from "./Components/NavBar";
import CrudApp from "./Components/CrudApp";
import AllUser from "./Components/AllUser";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <AddUser />
      <CrudApp />
      <AllUser />
    </div>
  );
};

export default App;
