import React from "react";
// import Navbar from "../components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../components/SignIn/SignIn";
import SignUP from "../components/SignUp/SignUp";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUP />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
