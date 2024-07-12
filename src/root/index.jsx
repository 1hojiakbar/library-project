import Home from "../pages/Home/Home";
import NotFound from "../pages/notFound";
import register from "../utils/register";
import Navbar from "../components/Navbar/Navbar";
import { BookProvider } from "../context/BookContext";
import { ModalProvider } from "../context/ModalContext";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const Root = () => {
  return (
    <>
      <ModalProvider>
        <BookProvider>
          <BrowserRouter>
            <Routes>
              {register.map(({ id, path, element: Element }) => {
                return <Route key={id} path={path} element={<Element />} />;
              })}
              <Route element={<Navbar />}>
                <Route path="/" element={<Home />} />
              </Route>
              <Route path="/404" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </BookProvider>
      </ModalProvider>
    </>
  );
};

export default Root;
