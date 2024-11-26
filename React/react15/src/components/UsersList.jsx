import User from "./User";
function UsersList({users}) {
  return(
        <>
            {users.map((user) => (<User user = {user} key={user.id}/>))}
        </>
        )
}
export default UsersList;