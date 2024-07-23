import AppBar from "../components/AppBar";
import BlogCard from "../components/BlogCard";
import { useBlogs } from "../hooks";

const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return (
      <div className="grid grid-cols-1 place-items-center">loading...</div>
    );
  }
  return (
    <div>
      <AppBar />
      {(blogs.map((blog) => {
        return (
          <BlogCard
            title={blog.title}
            content={blog.content}
            authorName={blog.author.name}
            id={blog.id}
            publishedDate="24-Feb-2021"
          />
        );
      })).reverse()}
    </div>
  );
};

export default Blogs;
