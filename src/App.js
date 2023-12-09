import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import BookShow from "./pages/BookShow";
import MyContext from "./MyContext";
import { useState } from "react";
import UpdateBook from "./pages/updateFile";
function App() {
  const [books, setBooks] = useState([]);
  const addBooks = ({ title, author }) => {
    setBooks([...books, { title: title, author: author }]);
  };
  return (
    <div>
      <MyContext.Provider value={{ books, addBooks }}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Layout />} />
            <Route path="showbooks" element={<BookShow />} />
            <Route path="addbooks" element={<HomePage />} />
            <Route path="/updatebook/:id" element={< UpdateBook/>} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}
export default App;
