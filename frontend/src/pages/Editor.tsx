import axios from "axios";
import { Editor } from "primereact/editor";
import { useState } from "react";
import { Backend_Url } from "../config";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks";
import AppBar from "../components/AppBar";
import { createPostInputType } from "@rahul405/med-common";
import { ToastContainer } from "react-toastify";
import { notify } from "../lib/utils";

const Publish = () => {
  useAuth();
  return (
    <div>
      <AppBar />
      <div className="flex place-items-center justify-center h-screen ">
        <div className="rounded-lg ">
          <TextEditor />
        </div>
      </div>
    </div>
  );
};

function TextEditor() {
  const [post, setPost] = useState<createPostInputType>({
    title: "",
    content: "",
  });
  const navigate = useNavigate();

  const renderHeader = () => {
    return (
      <span className="ql-formats">
        <button className="ql-bold" aria-label="Bold"></button>
        <button className="ql-italic" aria-label="Italic"></button>
        <button className="ql-underline" aria-label="Underline"></button>
      </span>
    );
  };

  const header = renderHeader();
  async function sendRequest() {
    
    try {
      await axios.post(`${Backend_Url}/blog`, post, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      
      
      navigate("/blogs");
    } catch (error) {
      notify("Title must be 10 characters & content must be 50 character long");
    }
  }

  return (
    <div className="">
      <input
        type="text"
        onChange={(e) => {
          setPost({
            ...post,
            title: e.target.value,
          });
        }}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-5 "
        placeholder="Title"
        required
      />
      <Editor
      value={post.content}
        onTextChange={(e) => {
          setPost({
            ...post,
            content: e.textValue,
          });
        }}
        headerTemplate={header}
        className="rounded-lg"
        style={{
          height: "400px",
          width: "600px",
          borderRadius: " 8px ",
        }}
      />
      <div>
        <button
          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-5  "
          onClick={() => {
            sendRequest();
          }}
        >
          Publish
        </button>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}


export default Publish;
