import React from "react";
type HeadingProps = {
  quote: string;
  author: string;
  postion: string;
};

const Quotes: React.FC<HeadingProps> = ({ quote, author, postion }) => {
  return (
    <div className="bg-slate-200 h-screen grid place-items-center ">
      <div className=" m-12 max-w-2xl max-h-max   ">
        <div className="text-4xl font-extrabold mb-5 ">“{quote}”</div>
        <div className="text-xl font-medium ">{author}</div>
        <div className="text-slate-400 font-semibold  my-1 ">{postion}</div>
      </div>
    </div>
  );
};

export default Quotes;
