import { useContext } from "react";
import Home from "../pages/Home/Home";
import NotFound from "../pages/notFound";
import register from "../utils/register";
import RegisterContext from "../context/RegisterContext";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const Root = () => {
  const { defValue } = useContext(RegisterContext);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {register.map(({ id, path, element: Element }) => {
            return <Route key={id} path={path} element={<Element />} />;
          })}
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Root;
