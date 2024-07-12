import { createContext, useState } from "react";
import bookData from "../utils/books";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [data, setData] = useState(bookData);

  const onDelete = (id) => {
    let res = bookData.filter((val) => val.id !== id);
    setData(res);
  };

  return (
    <BookContext.Provider value={{ data, onDelete }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContext;
