import { Outlet } from "react-router";
import { getAllData } from "../helpers/get";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useSearchParams } from "react-router";

function BlogList() {
  const [posts, setPosts] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuerry = searchParams.get("search") || "";

  const filteredPosts = posts.filter((post) => 
    post.title.toLowerCase().includes(searchQuerry.toLocaleLowerCase())
  );

  const getPosts = async () => {
    const posts = await getAllData();
    setPosts(posts);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchParams(value ? { search: value } : {});
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <h1>Blog List</h1>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search by title"
        onChange={handleSearch}
      />
      {filteredPosts.map((post) => {
        return (
          <div key={post.id} className=" border shadow p-3 m-3">
            <h1>{post.title}</h1>
            <p>{post.author}</p>
            <Link to={`${post.id}`}>
              <button className=" bg-slate-600 p-3">Read more</button>
            </Link>
          </div>
        );
      })}

      <Outlet />
    </>
  );
}
export default BlogList;
