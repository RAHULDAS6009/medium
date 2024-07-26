import axios from "axios";
import { Editor } from "primereact/editor";
import {  useState } from "react";
import { Backend_Url } from "../config";
import { useNavigate } from "react-router-dom";
import { useAuh } from "../hooks";

const Publish = () => {

  useAuh()
  return (
    <div className="flex place-items-center justify-center h-screen ">
      <TemplateDemo />
    </div>
  );
};

function TemplateDemo() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
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
    await axios.post(
      `${Backend_Url}/blog`,
      {
        title,
        content,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    navigate("/blogs");
  }

  return (
    <div className="">
      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-5 "
        placeholder="Title"
        required
      />
      <Editor
     
        value={content}
        onTextChange={(e) => setContent(e.textValue || "")}
        headerTemplate={header}
        className="rounded-lg"
        style={{ height: "400px", width: "600px" }}
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
    </div>
  );
}
export default Publish;
