import { Outlet } from "react-router-dom";
import SideNav from "./sideNav/SideNav";
import Footer from "../../sharecomponent/footer/Footer";
import useCustomContext from "../../sharecomponent/useCustomContext";

const Dashboard = () => {
  const { user, loading } = useCustomContext();
  console.log(user);
  return (
    <div>
      <div className="relative min-h-[calc(100vh-273px)] md:flex bg-white">
        <SideNav />
        <div className="w-full md:flex-1 min-h-[clac(100vh-360px)]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
