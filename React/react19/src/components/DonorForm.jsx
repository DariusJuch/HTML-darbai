import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
const url = "http://localhost:5000/donors";
function DonorForm() {
  const { register } = useForm();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    bloodGroup: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.prevDefault();
    try {
      await axios.post(url, formData);
      alert("Donor registered successfully!");
    } catch (error) {
      console.error("Error registering donor:", error);
    }
  };

  return (
    <>
      <section className="flex justify-center items-center h-[100vh] bg-slate-500">
        <form className=" flex flex-col w-[30%] " onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={handleChange}
            placeholder="First Name"
            {...register("firstName", { required: "Write a your Name" })}
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={handleChange}
            placeholder="Last Name"
            {...register("lastName", { required: "Write a Last Name" })}
          />
          <input
            type="number"
            name="age"
            id="age"
            onChange={handleChange}
            placeholder="Age"
            {...register("age", { required: "Your Age" })}
          />
          <select
            name="gender"
            id="gender"
            onChange={handleChange}
            {...register("gender", { required: "Chose your Gender" })}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Famale">Famale</option>
          </select>
          <input
            type="text"
            name="bloodGroup"
            id="bloodGroup"
            onChange={handleChange}
            placeholder="Blood Group"
            {...register("bloodGroup", { required: "Write your Blood Group" })}
          />
          <button type="submit" className=" p-2 bg-amber-400 border rounded ">
            Register
          </button>
        </form>
      </section>
    </>
  );
}
export default DonorForm;
