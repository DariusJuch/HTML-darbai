import { useState } from "react";
function Form2() {
    const [inputValue, setInputValue] = useState();

    const handleChange = (event) => {
      setInputValue(event.target.value);
    }
    console.log(event.target.value);
    
      return (
    <>
      <form action="/action_page.php" />
      <p>Please select your favorite Web language:</p>
      <input type="radio" id="html" name="fav_language" value="HTML" className="form-radio" onChange={handleChange} />
      <label htmlFor="html">HTML</label>
      <br />
      <input type="radio" id="css" name="fav_language" value="CSS" className="form-radio" onChange={handleChange} />
      <label htmlFor="css">CSS</label>
      <br />
      <input
        type="radio"
        id="javascript"
        name="fav_language"
        value="JavaScript"
        className="form-radio"
        onChange={handleChange}
      />
      <label htmlFor="javascript">JavaScript</label>

      <p>{inputValue}</p>
    </>
  );
}
export default Form2;
