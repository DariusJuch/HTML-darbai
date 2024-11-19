import { useState } from "react";

function Exercise1() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logIn = () => setIsLoggedIn((prev) => !prev)
  
    let jsx;
    if (isLoggedIn) {
      jsx = <p>Welcome, User!</p>;
    } else {
    
      jsx = <p>Please log in</p> 
    }
  
    return (
    <>
    {/* <button onClick={() => setIsLoggedIn((previousState) => !previousState)}>State</button> */}
    <div>{jsx}</div>
    <button onClick={logIn}>Login</button>
    </>
    );
  }
  
  export default Exercise1;
   