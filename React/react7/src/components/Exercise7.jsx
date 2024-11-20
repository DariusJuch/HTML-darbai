import { useState } from "react";
function UserType () {
    const users = {
        role: " ",
      };
    
      const [user, setUser] = useState(users);
    
      let changeRole = (event) => {
        setUser((previousState) => ({...previousState, role: (event.target.value)}) )
      }
    
      let name;
      if (user.role === "teacher"){
        name = <input type="text" placeholder="Subject"/>
      } else {
        name = <input type="text" placeholder="Grade"/>
      }

      return (
        <>
        <label htmlFor="Users"></label>
        <select onChange={changeRole} name="Users" id="Users">
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
        </select>
        {name}
        </>
      )
}

export default UserType;