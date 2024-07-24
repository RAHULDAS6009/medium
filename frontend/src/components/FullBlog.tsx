import { Blog } from "../hooks";
import { Avatar } from "./BlogCard";

const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div className="grid grid-cols-10">
      <div className="p-10  col-span-6">
        <div className="text-5xl font-extrabold">{blog.title}</div>
        <div className="text-xs font-semibold text-slate-300 py-2 ">
          Posted on 24-Aug-2023
        </div>
        <div className="text-gray-400 text-2xl">{blog.content}</div>
      </div>
      
      <div className="col-span-1 w-3 pt-[100px] text-2xl font-normal text-slate-500  ">Author</div>
      <div className=" col-span-3 grid grid-rows-10 ml-[-150px]">
        <div className="col-span-3 pt-[150px] "></div>
        <div className="col-span-7">
          <div className="flex ">
            <Avatar name={blog.author.name || "Anonymous"} size="big" />
            <div className="text-2xl font-semibold pl-2 text-slate-700  ">
              {blog.author.name}
            </div>
          </div>
          <div className="pl-12 text-slate-400 font-bold">
            Every author has a unique talent that sets them apart and allows
            them to contribute something special to the literary world
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBlog;
