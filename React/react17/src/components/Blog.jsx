import { useParams } from "react-router";
import { getOne } from "../helpers/get";
import { useEffect, useState } from "react";
import { Link } from "react-router";
function Blog() {
  const { postID } = useParams();
  const [post, setPosts] = useState(null);

  const getPost = async (id) => {
    const post = await getOne(id);
    setPosts(post);
  };

  useEffect(() => {
    getPost(postID);
  }, [postID]);

  if (!post) return <p>Post not found</p>;
  const { title, author, content, date, category } = post;

  return (
    <>
      <div className="border shadow p-5 m-3 w-[25%] absolute top-[60%] bg-slate-400">
        <h1>{title}</h1>
        <p>Author: {author}</p>
        <p>{content}</p>
        <p>Data: {date}</p>
        <p>Categoty: {category}</p>
        <Link to="/blog">
          <button className=" bg-amber-400 p-2">Back</button>
        </Link>
      </div>
    </>
  );
}
export default Blog;
