import PofileCard from './components/ProfileCard'
import './App.css'
import { getUsers } from './helper/get';
import { useEffect, useState } from 'react';

function App() {

  const [users, setUsers] = useState();
  const [error, setError] = useState("");

  const fetchData = async () => {
    const data = await getUsers();
    // console.log(data);
    setUsers(data);
    } 

    useEffect(()=> {
      fetchData();
    }, [])
  
    if(!users){
      return <p>loading...</p>
    }
    

  console.log(users);

  const {avatar, tag, location, stats, username } = users;

  // console.log(avatar)
  
  
  // Solution 1:
  // return (
  //   <>
  //     <PofileCard user={users[0]} />
  //   </>
  // )

  // Solution 2:
  return (
    <>
    {
      users.map(user=>
        <PofileCard user={user} />
      )
    }
    </>
  )

  // const array = [1,2,3]
  // return (
  //   <>
  // {array}
  //   </>
  // )
}

export default App
