import AppBar from "../components/AppBar";
import BlogCard from "../components/BlogCard";
import { useAuh, useBlogs } from "../hooks";

const Blogs = () => {
  const { loading, blogs } = useBlogs();
  useAuh()

  if (loading)
    return (
      <div className="flex place-items-center justify-center h-screen  ">
        <div>loading...</div>
      </div>
    );

  return (
    <div>
      <AppBar />
      {blogs
        .map((blog) => {
          return (
            <BlogCard
              title={blog.title}
              content={blog.content}
              authorName={blog.author.name}
              id={blog.id}
              publishedDate="24-Feb-2021"
            />
          );
        })
        .reverse()}
    </div>
  );
};

export default Blogs;
