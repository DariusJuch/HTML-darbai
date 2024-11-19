import { useState } from "react";

function Basic_1() {
    // const users = {
    //   name: "Nameless",
    //   isLoggedIn: true,
    // };
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logIn = () => setIsLoggedIn((prev) => !prev)
  
    let jsx;
    if (isLoggedIn) {
      jsx = <p>Welcome, User!</p>;
    } else {
    
      jsx = <p>OMG!!! you can log in</p> 
    }
  
    return (
    <>
    {/* <button onClick={() => setIsLoggedIn((previousState) => !previousState)}>State</button> */}
    <div>{jsx}</div>
    <button onClick={logIn}>Just do it</button>
    </>
    );
  }
  
  export default Basic_1;
   