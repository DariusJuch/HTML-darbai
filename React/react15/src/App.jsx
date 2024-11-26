import "./App.css";
import Forms from "./components/Forms";
import { useState, useEffect } from "react";
import { getAllData } from "./helpers/get";
import UsersList from "./components/UsersList";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [update, setUpdate] = useState(0);

  const fetchData = async () => {
    try {
      const data = await getAllData();
      setUsers(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  },[update]);

  return (
    <>
      <Forms setUpdate = {setUpdate} />
      {!error && <UsersList users = {users}/>}
      {error && <p>{error}</p>}
    </>
  );
}

export default App;
