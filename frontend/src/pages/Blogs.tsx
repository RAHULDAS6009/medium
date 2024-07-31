import AppBar from "../components/AppBar";
import BlogCard from "../components/BlogCard";
import BlogSkeleton from "../components/BlogSkeleton";
import { useAuth, useBlogs } from "../hooks";

const Blogs = () => {
  const { loading, blogs } = useBlogs();
  useAuth();

  if (loading) return <BlogSkeleton />;

  return (
    <div>
      <AppBar />
      <div className="pl-96">
        {blogs.map((blog) => {
          return (
            <BlogCard
              title={blog.title}
              content={blog.content}
              authorName={blog.author.name}
              id={blog.id}
              publishedDate="24-Feb-2021"
            />
          );
        }).reverse()}
      </div>
    </div>
  );
};

export default Blogs;
