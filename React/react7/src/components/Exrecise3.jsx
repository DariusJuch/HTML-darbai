import { useState } from "react";

function Exercise3() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = () => setIsLoggedIn((prev) => !prev);

  let jsx;
  if (isLoggedIn === true) {
      jsx = <div><button onClick={logIn}>Profile</button></div>;
    } else if (isLoggedIn === false) {
      jsx = <div>
        <button onClick={logIn}>Log In</button>
        <button onClick={logIn}>Sign Up</button>
      </div>
    }

  return (
    <>
      {/* <button onClick={() => setIsLoggedIn((previousState) => !previousState)}>State</button> */}
      <div>{jsx}</div>
      {/* <button onClick={loading}>Loading</button> */}
      {/* <button onClick={logIn}>Login</button> */}
    </>
  );
}

export default Exercise3;