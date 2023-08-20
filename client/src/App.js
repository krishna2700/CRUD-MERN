import React from "react";
import AddUser from "./Components/AddUser";
import "./App.css";
import NavBar from "./Components/NavBar";
import CrudApp from "./Components/CrudApp";
import AllUser from "./Components/AllUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditUser from "./Components/EditUser";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<CrudApp />} />
        <Route path="/alluser" element={<AllUser />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/editUser" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
