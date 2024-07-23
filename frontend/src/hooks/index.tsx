import axios from "axios";
import { useEffect, useState } from "react";
import { Backend_Url } from "../config";
interface Blog {
  title: string;
  content: string;
  author: {
    name: string;
  };
  id:string;
  published: boolean;
}
export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    axios
      .get(`${Backend_Url}/blog/bulk`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setBlogs(res.data.posts);
        setLoading(false);
      });

      
  },[]);

  return {
    loading,
    blogs,
  };
};
