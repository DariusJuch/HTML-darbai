import { useState } from "react";
import { deleteData } from "../helpers/delet";
import { getOne } from "../helpers/get";
import { updateData } from "../helpers/update";
import Forms from "./Forms"
function User({user, setUpdate}) {

       const {username, email, channel, likes, id} = user; 
       const [formOpen, setFormOpen] = useState(false);

       const deleteHandeler = async (id) => {
        await deleteData(id);
        setUpdate((prev) => prev + 1)
       };
       const likesHandler = async (id) => {
        const {likes} = await getOne(id);
        await updateData(id, {likes: likes + 1});
        setUpdate((prev) => prev +1);
       };

    return(
        <div className="shadow m-3 border pl-6 py-2 flex items-center justify-around">
            <div>
           <h1>{username}</h1>
           <p>{email}</p>
           <p>user channel: {channel}</p>
           <p>likes: {likes}</p>
           <button className="shadow border px-1" onClick={()=>deleteHandeler(id)}>x: Delete</button>
           <button className="ml-4 shadow border px-1" onClick={()=> likesHandler(id)}>Like</button>
        <button className="ml-4 shadow border px-1" onClick={() => setFormOpen((prev) => !prev)}>Edit User Data</button>
      </div>
      {formOpen && <Forms user={user} setUpdate={setUpdate} setFormOpen={setFormOpen}/>}
      </div>

    )
    
};
export default User;