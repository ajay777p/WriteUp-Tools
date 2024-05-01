import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Test from "./Test";
import Create from "./Components/Creation/Create";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  );
};

export default App;
