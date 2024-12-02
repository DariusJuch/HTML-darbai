import axios from "axios";
import { Link } from "react-router";
import Footer from "./Footer";

function BookList({books, fetchBooks}) {
    
    
    const toggleResersve = async (book) => {
        try {
            await axios.patch(`/books/${book.id}`, {
                reserved: !book.reserved,
            });
            fetchBooks();
        } catch (error) {
            console.error("klaida", error);
        }
    };

  return (
    <>
      <section>
        <h1>Knygų Sąrašas</h1>
        <div>
          {books.map((book) => (
            <div key={book.id}>
              <img src={book.cover} alt={book.title} />
              <h4>{book.title}</h4>
              <p>Autorius:{book.author}</p>
              <p>Kategorija:{book.categoty}</p>
              <p>Kaina:{book.price} </p>
              <p>Būsena: {book.reserved ? `Rezervuota` : `Laisva`}</p>
              <button
                onClick={() => toggleResersve(book)}
              >
                {book.reserved ? `Gražinti` : `Išduoti`}
              </button>
             <Link to={`/edit/${book.id}`}>Redaguoti</Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
export default BookList;
