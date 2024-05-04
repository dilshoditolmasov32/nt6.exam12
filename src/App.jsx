import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Admin from "./pages/admin/Admin";
import SingleRoute from "./pages/single-route/SingleRoute";
import Notpage404 from "./pages/page404/NotPage";
import Footer from "./components/footer/Footer";
import LoginMui from "./pages/login/LoginMui";
import Navbar from "./components/header/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single" element={<SingleRoute />} />
        <Route path="/login" element={<LoginMui />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Notpage404 />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
