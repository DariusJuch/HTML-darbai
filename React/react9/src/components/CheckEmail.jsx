import { useState } from "react";
function CheckEmail() {
  const [inputValue, setInputValue] = useState({
    email: "",
    error: "",
  });

  const handleChange = (e) => {
    const email = e.target.value;
    
    
    const emailFormule = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm;
    const error = emailFormule.test(email) ? "" : "Please check your Email";
    setInputValue({ email, error});
  }   
  return (
    <>
      <div>
        <form noValidate>
          <p>
            <label htmlFor="fname">Enter your email:</label>
          </p>
          <p>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input bg-slate-200"
              onChange={handleChange}
              value={inputValue.email}
            />
          </p>
        </form>
        <p>{inputValue.error}</p>
      </div>
    </>
  );
}
export default CheckEmail;
