import { useState } from "react";
function UserRole () {
    const initialData = {
        role: " ",
      };
    
      const [data, setData] = useState(initialData);
    
      let changeRole = (event) => {
        setData((previousState) => ({...previousState, role: (event.target.value)}) )
      }

    console.log(typeof data);
    
    let roleTag;
    switch (data.role) {
        case "admin":
            roleTag = <p>AdminPanel</p>;
            break;
        case "user":
            roleTag = <p>UserDashboard</p>;
            break;

        
        default:
            roleTag = <p>GuestPage</p>;
            break;
    }

    return(
        <>
        <label htmlFor="Users">Choose</label>
        <select onChange={changeRole} name="Users" id="Users">
          <option value="admin">Admin</option>
          <option value="user">User</option>
          <option value="guest">Guest</option>
        </select>
        {roleTag}
        </>
    )
    
}

export default UserRole;