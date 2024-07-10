import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "../components/SignUp/SignUp";
import SignIn from "../components/SignIn/SignIn";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
