function User({user}) {
       const {username, email, channel, likes, id} = user; 
    return(
        <div className=" shadow-md m-5">
           <h1>{username}</h1>
           <p>{email}</p>
           <p>user channel: {channel}</p>
           <p>likes: {likes}</p>
        </div>
    )
    
};
export default User;