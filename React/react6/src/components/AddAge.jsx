import { useState } from "react";

function AddAge() {
    // const users = {
    //   name: "Nameless",
    //   isLoggedIn: true,
    // };
    const [addAge, setIsLoggedIn] = useState(0);

    const add = () => setIsLoggedIn((addAge) => 3 + addAge)
  
    // let jsx = 0;
    // if (addAge) {
    //   jsx = addAge;
    // }
  
    return (
    <>
    {/* <button onClick={() => setIsLoggedIn((previousState) => !previousState)}>State</button> */}
    <div>{addAge}</div>
    <button onClick={add}>click</button>
    </>
    );
  }
  export default AddAge;
   