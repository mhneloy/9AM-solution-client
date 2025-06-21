import Footer from "./sharecomponent/footer/Footer";
import Navbar from "./sharecomponent/navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-296px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
