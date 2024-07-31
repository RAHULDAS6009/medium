import AppBar from "../components/AppBar";
import FullBlog from "../components/FullBlog";
import { Blog, useAuth, useBlog } from "../hooks";
import { useParams } from "react-router-dom";
const defaultBlog: Blog = {
  title: "Default Title",
  content: "Default content",
  author: {
    name: "Default Author",
  },
  id: "default-id",
  published: false,
};

export const Blogpage = () => {
  useAuth();
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });

  if (loading) {
    return <div><Spinner/></div>;
  }

  return (
    <div>
      <AppBar />

      <FullBlog blog={blog ?? defaultBlog} />
    </div>
  );
  function Spinner(){
    return <div className='flex space-x-2 justify-center items-center bg-white h-screen dark:invert'>
    <span className='sr-only'>Loading...</span>
     <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
   <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
   <div className='h-8 w-8 bg-black rounded-full animate-bounce'></div>
 </div>
  }
};
