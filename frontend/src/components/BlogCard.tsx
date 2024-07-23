import { Link } from "react-router-dom";

interface BlogCardProps {
  title: string;
  content: string;
  authorName: string;
  publishedDate: string;
  id: string;
}
const BlogCard = ({
  title,
  content,
  authorName,
  publishedDate,
  id,
}: BlogCardProps) => {
  return (
    <div className="grid place-content-center ">
      <Link className="" to={"/" + id}>
        <div className="border-b-2 border-slate-100 max-w-xl cursor-pointer p-5   ">
          <div className="flex p-2">
            <div className="flex items-center justify-center">
              <Avatar size="small" name={authorName} />
            </div>
            <div className="pl-2 flex items-center justify-center text-slate-500 font-semibold text-[15px]">
              {authorName}
            </div>
            <div className="pl-2 flex items-center justify-center">
              <Circle />
            </div>
            <div className="flex items-center justify-center font-semibold text-sm text-slate-400">
              {publishedDate}
            </div>
          </div>
          <div className="text-2xl font-bold p-2">{title}</div>
          <div className=" font-light text-slate-400 p-2">
            {(content.length > 100 ? content.slice(0, 100) : content) + "..."}
          </div>
          <div className="font-bold text-xs  text-slate-500 flex items-center p-2">
            {Math.ceil(content.length / 100) + " min read"}
          </div>
        </div>
      </Link>
    </div>
  );
};
export function Avatar({
  name,
  size,
}: {
  name: string;
  size: "small" | "big";
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${
        size == "small" ? "w-6 h-6" : "w-10 h-10"
      }  bg-gray-700 rounded-full grid cols-1 place-content-center  `}
    >
      <span
        className={`font-medium ${
          size == "small" ? "text-xs" : "text-lg"
        }  text-slate-100 `}
      >
        {/* if two words eg Rahul Das -> RD */}
        {name[0].toUpperCase()}
      </span>
    </div>
  );
}
function Circle() {
  return <div className="flex w-1.5 h-1.5 me-3 bg-gray-600 rounded-full"></div>;
}

export default BlogCard;
