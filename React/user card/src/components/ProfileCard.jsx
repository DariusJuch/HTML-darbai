
const PofileCard = ( {user} ) => {
  const {avatar, tag, location, stats, username } = user;
  console.log(user)
  return (
    <>
      <div className=" w-80 mx-auto my-8 p-6 bg-blue-50 rounded-lg shadow-lg text-center">
        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white">
          <img
            src={avatar}
            alt="Profile"
            className=" w-full h-full object-cover"
          />
        </div>
        <h2 className="mt-4 text-xl font-semibold text-gray-800">{username}</h2>
        <p className=" text-gray-600">@{tag}</p>
        <p className="text-gray-600">{location}</p>
        <div className="flex justify-between mt-6 bg-pink-500 text-white py-3 px-4 rounded-lg">
          <div className=" text-center">
            <h3 className=" text-sm font-medium">Followers</h3>
            <p className=" text-black">{stats.followers}</p>
          </div>
          <div className="w-px bg-white"></div>
          <div className=" text-center">
            <h3 className=" text-sm font-medium">Views</h3>
            <p className=" text-black">{stats.views}</p>
          </div>
          <div className="w-px bg-white"></div>
          <div className=" text-center">
            <h3 className=" text-sm font-medium">Likes</h3>
            <p className=" text-black">{stats.likes}</p>
          </div>

        </div>
      </div>
    </>
  );
};
export default PofileCard;
