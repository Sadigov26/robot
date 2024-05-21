import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Bascet from "../Pages/Bascet/Bascet";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<Bascet/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
