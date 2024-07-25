import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

const AppBar = () => {
  return (
    <div className="flex justify-between p-5  border ">
      <Link to={"/blogs"}>
        <div className="text-2xl font-semibold">Medium</div>
      </Link>
      <div className="flex justify-end">
        <Link to={"/editor"}>
          <WriteButton />
        </Link>
        <div>
          <Avatar name={"wfdd"} size="big" />
        </div>
      </div>
    </div>
  );
};
// function ToolTip() {
//   return (
//     <div>
//       <button
//         data-tooltip-target="tooltip-bottom"
//         data-tooltip-placement="bottom"
//         type="button"
//         className="ms-3 mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//       >
//         Tooltip bottom
//       </button>

//       <div
//         id="tooltip-bottom"
//         role="tooltip"
//         className="absolute z-10  inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
//       >
//         Tooltip on bottom
//         <div className="tooltip-arrow" data-popper-arrow></div>
//       </div>
//     </div>
//   );
// }
function WriteButton() {
  return (
    <button
      type="button"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
    >
      Write
    </button>
  );
}

export default AppBar;
