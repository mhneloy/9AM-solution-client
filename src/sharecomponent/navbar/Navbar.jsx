import { Link, NavLink } from "react-router-dom";
import pervej from "../../assets/Logo.png";
const Navbar = () => {
  const list = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `nav-text text-[18px] ${isActive ? "text-brand" : "text-white"}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/protfolio"
          className={({ isActive }) =>
            `nav-text text-[18px] ${isActive ? "text-brand" : "text-white"}`
          }
        >
          Protfolio
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/service"
          className={({ isActive }) =>
            `nav-text text-[18px] ${isActive ? "text-brand" : "text-white"}`
          }
        >
          Service
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `nav-text text-[18px] ${isActive ? "text-brand" : "text-white"}`
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-[#260606]">
      <div className="container mx-auto">
        <div className="navbar bg-transparent shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden text-brand"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-[#260606] rounded-box z-1 mt-3 w-52 p-2 shadow font-rubik"
              >
                {list}
              </ul>
            </div>
            <NavLink to="/" className=" text-xl">
              <img src={pervej} alt="Pervej" className="h-[60px]" />
            </NavLink>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white font-rubik">
              {list}
            </ul>
          </div>
          <div className="navbar-end">
            {/* <Link to="/signIn" className="btn">
              Sign IN
            </Link> */}
            <Link className="btn bg-transparent text-brand hover:bg-brand hover:text-white border-brand">
              Book a Metting
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
