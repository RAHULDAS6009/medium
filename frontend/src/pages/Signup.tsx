import Auth from "../components/Auth";
import Quotes from "../components/Quote";

export const Signup = () => {
  return (
    <div className=" h-screen w-screen  grid grid-cols-1 lg:grid-cols-2 divide-x  ">
      <Auth type="signup" />
      <div className="hidden  lg:block     ">
        <Quotes
          quote="𝖳𝗁𝖾 𝖼𝗎𝗌𝗍𝗈𝗆𝖾𝗋 𝗌𝖾𝗋𝗏𝗂𝖼𝖾 𝖨 𝗋𝖾𝖼𝖾𝗂𝗏𝖾𝖽 𝗐𝖺𝗌 𝖾𝗑𝖼𝖾𝗉𝗍𝗂𝗈𝗇𝖺𝗅. 𝖳𝗁𝖾 𝗌𝗎𝗉𝗉𝗈𝗋𝗍 𝗍𝖾𝖺𝗆 𝗐𝖾𝗇𝗍 𝖺𝖻𝗈𝗏𝖾 𝖺𝗇𝖽 𝖻𝖾𝗒𝗈𝗇𝖽 𝗍𝗈 𝖺𝖽𝖽𝗋𝖾𝗌𝗌 𝗆𝗒 𝖼𝗈𝗇𝖼𝖾𝗋𝗇𝗌."
          author="Jules Winnfield"
          postion="CEO,Acme Inc"
        />
      </div>
    </div>
  );
};
