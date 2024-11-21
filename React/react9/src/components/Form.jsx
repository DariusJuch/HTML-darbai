import { useState } from "react";
function Form() {
  const [inputValue, setInputValue] = useState();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <>
    <div>
        <label htmlFor="fname">First name:</label>
        <br />
        <p>
            <input
            type="text"
            id="fname"
            name="fname"
            className="form-input bg-slate-200"
             onChange={handleChange}
            value={inputValue}
            />
        </p>
        <p>{inputValue}</p>
    </div>
    </>
  );
}
export default Form;
