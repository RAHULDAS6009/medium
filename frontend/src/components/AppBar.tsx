import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

const AppBar = () => {
  
  return (
    <div className="flex justify-between p-5  border ">
      <Link to={"/blogs"}>
        <div className="text-2xl font-semibold">Medium</div>
      </Link>
        <div><Avatar name="rahul" size="big"/></div>
    </div>
  )
}

export default AppBar