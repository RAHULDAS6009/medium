const BlogSkeleton = () => {
  return (
    <div>
      <div className="animate-pulse">
        <div className="flex justify-between p-5  border ">
          <div className="text-2xl font-semibold">
            {" "}
            <div className="h-10 bg-gray-200 rounded-2xl  w-40 mb-4"></div>
          </div>
          <div className="flex justify-end">
            <div className="h-10 bg-gray-200  rounded-2xl w-28 mr-9 "></div>
            <div>
              <div className="h-10 bg-gray-200 rounded-full   w-10 "></div>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-96 ">
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    </div>
  );
};

function Skeleton() {
  return (
    <div>
      <div className="border-b-2 border-slate-100 max-w-xl cursor-pointer p-5  ">
        <div className="flex p-2">
          <div className="flex items-center justify-center">
            {/* <Avatar size="small" name={authorName} /> */}
            <div className="h-6 bg-gray-200 rounded-full  w-6 " />
          </div>
          <div className="pl-2 flex items-center justify-center text-slate-500 font-semibold text-[15px]">
            <div className="h-2 bg-gray-200 rounded-full  w-14 " />
          </div>
          <div className="pl-2 flex items-center justify-center">
            <div className="h-1.5 bg-gray-200 rounded-full  w-1.5 mr-2" />
          </div>
          <div className="flex items-center justify-center font-semibold text-sm text-slate-400">
            <div className="h-2 bg-gray-200 rounded-full  w-20 " />
          </div>
        </div>
        <div className="text-2xl font-bold p-2">
          {" "}
          <div className="h-4 bg-gray-200 rounded-full  w-20 " />
        </div>
        <div className=" font-light text-slate-400 p-2">
          <div className="h-8 bg-gray-200 rounded-full  w-96" />
        </div>
        <div className="font-bold text-xs  text-slate-500 flex items-center p-2">
          <div className="h-2 bg-gray-200 rounded-full  w-10" />
        </div>
      </div>
    </div>
  );
}

export default BlogSkeleton;
