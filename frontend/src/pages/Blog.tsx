import AppBar from "../components/AppBar";
import BlogSkeleton from "../components/BlogSkeleton";
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
    return <div><BlogSkeleton/></div>;
  }

  return (
    <div>
      <AppBar />

      <FullBlog blog={blog ?? defaultBlog} />
    </div>
  );
};
