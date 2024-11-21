import { useState } from "react";
function CheckEmail() {
  const [inputValue, setInputValue] = useState();

  const handleChange = (event) => {
    setInputValue(event.target.value);
    
    const emailFormule = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm;
      
    if (emailFormule.test(event.target.value)) {
        console.log(inputValue);
      } else if (!emailFormule.test(event.target.value)) {
        alert("Please check your Email");
      }
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
              value={inputValue}
            />
          </p>
        </form>
        <p>{inputValue}</p>
      </div>
    </>
  );
}
export default CheckEmail;
