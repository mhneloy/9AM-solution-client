import { Link, NavLink } from "react-router-dom";
import pervej from "../../assets/Logo.png";
const Navbar = () => {
  const list = (
    <>
      <li>
        <NavLink
          className={`nav-text text-[18px] ${(isActive) =>
            isActive ? "text-brand" : "text-brand"}`}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={`nav-text text-[18px] ${(isActive) =>
            isActive ? "text-brand" : "text-brand"}`}
        >
          Protfolio
        </NavLink>
      </li>
      <li>
        <NavLink
          className={`nav-text text-[18px] ${(isActive) =>
            isActive ? "text-brand" : "text-brand"}`}
        >
          Service
        </NavLink>
      </li>
      <li>
        <NavLink
          className={`nav-text text-[18px] ${(isActive) =>
            isActive ? "text-brand" : "text-brand"}`}
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
                className="btn btn-ghost lg:hidden"
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {list}
              </ul>
            </div>
            <NavLink to="/" className=" text-xl">
              <img src={pervej} alt="Pervej" className="h-[60px]" />
            </NavLink>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white">{list}</ul>
          </div>
          <div className="navbar-end">
            {/* <Link to="/signIn" className="btn">
              Sign IN
            </Link> */}
            <Link className="btn">Book a Metting</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
