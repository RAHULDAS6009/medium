import { signupInputType } from "@rahul405/med-common";
import axios from "axios";
import React, { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Backend_Url } from "../config";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setPostInputs] = useState<signupInputType>({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();


  const notify = () =>
    toast.error(" Inputs are wrong", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${Backend_Url}/user/${type == "signup" ? "signup" : "signin"}`,
        postInputs
      );
      const token = response.data.token;
      console.log(response);
      localStorage.setItem("token", token);
      navigate("/blogs");
    } catch (error) {
      //alert the user
      notify();
    }
  }

  return (
    <div className="grid place-items-center h-screen ">
      <div className="  w-[470px]    grid place-items-center ">
        <div>
          <div className="text-center">
            <div className="text-3xl font-extrabold px-12">
              Create an account
            </div>
            <div className="text-slate-400 my-2 mt-1 text-lg font-medium">
              {type == "signup"
                ? "Already have an account? "
                : "Don't have an account? "}
              <Link
                className="underline"
                to={type == "signup" ? "/signin" : "/signup"}
              >
                {type == "signup" ? "Login" : "Signup"}
              </Link>
            </div>
          </div>
          {type == "signup" ? (
            <InputBox
              label="Username"
              placeholder="Enter your username"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  name: e.target.value,
                });
              }}
            />
          ) : (
            ""
          )}
          <InputBox
            onChange={(e) => {
              setPostInputs({
                ...postInputs,
                email: e.target.value,
              });
            }}
            label="Email"
            placeholder="m@example.com"
          />
          <InputBox
            onChange={(e) => {
              setPostInputs({
                ...postInputs,
                password: e.target.value,
              });
            }}
            type="password"
            label="Password"
            placeholder=""
          />
          <ButtonAndAlert
            type={type == "signup" ? "Sign up" : "Sign in"}
            onClick={sendRequest}
          />
        </div>
      </div>
    </div>
  );
};

interface HeadingProps {
  label: string;
  type?: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const InputBox: React.FC<HeadingProps> = ({
  label,
  type,
  placeholder,
  onChange,
}) => {
  return (
    <div>
      <div className="font-bold text-sm ">{label}</div>
      <input
        type={type}
        className="p-5 pl-2 h-4 w-full rounded my-4 border border-gray-400  "
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
interface ButtonAndAlert {
  onClick: () => void;
  type: string;
}
function ButtonAndAlert({ onClick, type }: ButtonAndAlert) {
  return (
    <div>
      <button
        className="bg-slate-800 hover:bg-slate-700 w-full rounded-md   text-white h-10 font-semibold"
        onClick={onClick}
      >
        {type}
      </button>
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

export default Auth;
