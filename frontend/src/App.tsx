import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { Blogpage } from "./pages/Blog";
import Blogs from "./pages/Blogs";
import Editor from "./pages/Editor";

import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/blog/:id" element={<Blogpage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/editor" element={<Editor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
