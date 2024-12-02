import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Footer from "./Footer";
function BookForm({ onBookUpdated, onBookAdd }) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    price: "",
    cover: "",
  });

  const [isEditMode, setIsEditMode] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setIsEditMode(true);
      axios.get(`/books/${id}`).then((response) => {
        setFormData(response.data);
      });
    }
  }, [id]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditMode) {
        const response = await axios.put(`/books/ ${id}`, formData);
        onBookUpdated(response.data);
      } else {
        const response = await axios.post(`/books`, formData);
        onBookAdd(response.data);
      }
    } catch (error) {
      console.error("klaida", error);
    }
  };

  return (
    <>
      <section className="">
        <form onSubmit={handleSubmit} className=" flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-3">
            {isEditMode ? `Redaguoti knyga` : `Prideti knyga`}
          </h1>
            <p>Pavadinimas:</p>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="m-2"
            />
            <p>Autorius:</p>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className="m-2"
            />
            <p>Kategorija:</p>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="m-2"
            />
            <p>Kaina:</p>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="m-2"
            />
            <p>Virselio URL:</p>
            <input
              type="text"
              id="cover"
              name="cover"
              value={formData.cover}
              onChange={handleChange} 
              className="m-2"
            />
            <div className="bg-gray-500 rounded-lg p-2">
                <button type="submit">Pridėti knyga</button>
            </div>
        </form>
      </section>
    </>
  );
}
export default BookForm;
