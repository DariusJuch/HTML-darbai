import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import axios from "axios";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("/books");
      setBooks(response.data);
    } catch (error) {
      console.error("klaida", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleBookAdd = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  const handleBookUpdate = (updatedBook) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
  };

  return (
    <>
    <section className=" bg-slate-400 h-[40vh]">
      <nav className="flex justify-evenly items-center bg-amber-200">
        <Link to="/">Knygu sąrašas</Link>
        <Link to="/add">Pridėti knygą</Link>
      </nav>
      <Routes>

        <Route path="/add" element={<BookForm onBookAdd={handleBookAdd} />} />
        <Route
          path="/edit/:id"
          element={<BookForm onBookUpdated={handleBookUpdate} />}
        />
      </Routes>
      <div className="flex justify-center items-center bg-amber-200">
      <Footer/>
      </div>
    </section>
    </>
  );
}

export default App;
