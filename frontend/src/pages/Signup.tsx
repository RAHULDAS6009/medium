import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import {Typewriter} from "../components/Typewriter";

export const Signup = () => {
  const words = [
    {
      text: "Build",
      className:"text-blue-500"
    },
    {
      text: "awesome",
    }]
  return (
    <div>
      <div>
        <Heading label={"Create an account"} />
        <SubHeading label={"Already have an account"} to={"/signin"} path={"Login"} />
        <InputBox label={"Username"} type={"text"} />
        <InputBox label={"Username"} type={"text"} />
        <InputBox label={"Password"} type={"password"} />
        <Button label={"Signup"} />
      </div>
      <div>
        <Typewriter words={words}/>
      </div>
    </div>
  );
};
