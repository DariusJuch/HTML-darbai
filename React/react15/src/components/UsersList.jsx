import User from "./User";

function UsersList({ users, setUpdate }) {
  return (
    <>
      {users.map((user) => (
        <User user={user} setUpdate={setUpdate} key={user.id} />
      ))}
    </>
  );
}

export default UsersList;
