import { useNavigate } from "react-router-dom";
import { AuroraBackground } from "../components/ui/aurora-background";

const LandingPage = () => {
  return (
    <div>
      <AuroraBackground children={<BackgroundComponent />} />
    </div>
  );
};
function BackgroundComponent() {
  const navigate = useNavigate();

  async function onClick() {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/blogs");
    } else {
      navigate("/signin");
    }
  }
  return (
    <>
      <div className="flex justify-end p-5">
        <button className="p-[3px] relative" onClick={onClick}>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            Log In
          </div>
        </button>
      </div>
      <div className="flex flex-col justify-center place-items-center h-screen ">
        <div className="text-9xl font-extrabold">
          Discover the latest insights
        </div>
        <div className="text-xl font-semibold text-gray-400 max-w-5xl pt-5">
          Stay up-to-date with our blog, where we share the latest trends and
          topics & Join our community
        </div>
      </div>
    </>
  );
}

export default LandingPage;
