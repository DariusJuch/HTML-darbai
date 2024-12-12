import React from "react";
import { getUsers } from "../helper/get";
const PofileCard = () => {

  const fetchData = async () => {
    const data = await getUsers();
    console.log(data);
    
  }

  return (
    <>
      <div className=" w-80 mx-auto my-8 p-6 bg-blue-50 rounded-lg shadow-lg text-center">
        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white">
          <img
            src=""
            alt="Profile"
            className=" w-full h-full object-cover"
          />
        </div>
        <h2 className="mt-4 text-xl font-semibold text-gray-800"></h2>
        <p className=" text-gray-600">""</p>
        <p className="text-gray-600"></p>
        <div className="flex justify-between mt-6 bg-pink-500 text-white py-3 px-4 rounded-lg">
          <div className=" text-center">
            <h3 className=" text-sm font-medium">Followers</h3>
            <p className=" font-bold"></p>
          </div>
          <div className="w-px bg-white"></div>
          <div className=" text-center">
            <h3 className=" text-sm font-medium">Views</h3>
            <p className=" font-bold"></p>
          </div>
          <div className="w-px bg-white"></div>
          <div className=" text-center">
            <h3 className=" text-sm font-medium">Likes</h3>
            <p className=" font-bold"></p>
          </div>
          <button onChange={fetchData()}></button>
        </div>
      </div>
    </>
  );
};
export default PofileCard;
