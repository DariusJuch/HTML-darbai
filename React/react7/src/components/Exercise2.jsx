import { useState } from "react";

function Exercise2() {
  const [isLoading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const loading = () => setLoading((prev) => !prev);
  const logIn = () => setIsLoggedIn((prev) => !prev);

  let jsx;
  if (!isLoading) {
    if (isLoggedIn === true) {
      jsx = <p>Welcome, User!</p>;
    } else if (isLoggedIn === false) {
      jsx = <p>Please log in</p>;
    }
  } else {
    jsx = <p>Loading...</p>;
  }
  return (
    <>
      {/* <button onClick={() => setIsLoggedIn((previousState) => !previousState)}>State</button> */}
      <div>{jsx}</div>
      <button onClick={loading}>Loading</button>
      <button onClick={logIn}>Login</button>
    </>
  );
}

export default Exercise2;
