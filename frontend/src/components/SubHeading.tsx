import React from "react";
import { Link } from "react-router-dom";

interface SubHeadingProps  {
  label: string,
  to: string,
  path: string,
}
const SubHeading:React.FC<SubHeadingProps> = ({label,path,to}) => {
  return (
    <div>
      {label}?<Link to={to}>{path}</Link>
    </div>
  );
};

export default SubHeading;
