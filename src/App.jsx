// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Profile from "./components/Profile.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import Resume from "./pages/Resume.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import StoreProvider from "./context/index.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <StoreProvider>
          <Profile />
          <div className="main-content">
            <Navbar />
            <Routes>
              <Route path="*" element={<div>Not Found</div>} />
              <Route path="/" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio />} />
              {/* <Route path="/blog" element={<Blog />} /> */}
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </StoreProvider>
      </BrowserRouter>
    </>
  );
}
export default App;
