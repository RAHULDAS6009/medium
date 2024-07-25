import { Blog } from "../hooks";
import { Avatar } from "./BlogCard";

const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div className="">
      <div className=" grid grid-cols-12">
        <div className="col-span-8 ">
          <div className="px-12 ml-18 pt-12 ">
            <div className="font-extrabold text-5xl">{blog.title}</div>
            <div className="text-xs font-extrabold text-gray-400 pt-4">
              Published on 24-Feb-2002
            </div>
            <div className="text-gray-500 font-medium text-xl ">
              {blog.content}
            </div>
          </div>
        </div>
        <div className="col-span-4 pt-14">
          <div className="text-slate-500 font-semibold text-2xl">Author</div>
          <div className="flex">
            <div className="pt-4">
              <Avatar size="big" name={blog.author.name} />
            </div>
            <div className="pl-4 text-slate-700 font-semibold text-xl pt-2">
              {blog.author.name}
            </div>
          </div>
          <div className="pl-14 text-xl text-gray-400 pr-20">
            Every author has a unique talent that sets them apart and allows
            them to contribute something special to the literary world.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBlog;
