import axios from "axios";
import { useEffect, useState } from "react";
import { Backend_Url } from "../config";
import { useNavigate } from "react-router-dom";
export interface Blog {
  title: string;
  content: string;
  author: {
    name: string;
  };
  id: string;
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
        setBlogs(res.data.posts);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    blogs,
  };
};

export const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>();

  useEffect(() => {
    axios
      .get(`${Backend_Url}/blog/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        setBlog(res.data.post);
        setLoading(false);
      });
  }, [id]);

  return {
    loading,
    blog,
  };
};

export const useAuth = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
    } else {
      try {
        axios.get(`${Backend_Url}/*`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
      } catch {
        navigate("/editor");
      }
    }
  }, [navigate]);
};
