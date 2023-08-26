import React from "react";
import Home from "../pages/Home";
import Drawing from "../pages/Drawing";
import Introducing from "../pages/Introducing";
import { Routes,Route } from "react-router-dom";

const AppRouter = () => {
  return ( 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/introducing" element={<Introducing/>}/>
        <Route path="/drawing" element={<Drawing/>}/>
      </Routes>
    );
}

export default AppRouter;