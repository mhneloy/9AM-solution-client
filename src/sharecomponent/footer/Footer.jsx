import { NavLink } from "react-router-dom";
import pervej from "../../assets/Logo.png";
const Footer = () => {
  return (
    <div className="bg-[#260606]">
      <footer className="footer sm:footer-horizontal bg-transparent text-white p-10">
        <aside>
          <div>
            <img src={pervej} alt="Pervej" className="h-[60px]" />
          </div>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <NavLink className="link link-hover">Branding</NavLink>
          <NavLink className="link link-hover">Design</NavLink>
          <NavLink className="link link-hover">Marketing</NavLink>
          <NavLink className="link link-hover">Advertisement</NavLink>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <NavLink className="link link-hover">Home</NavLink>
          <NavLink className="link link-hover">About us</NavLink>
          <NavLink className="link link-hover">Contact</NavLink>
          <NavLink className="link link-hover">Protfolio</NavLink>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <NavLink className="link link-hover">Terms of use</NavLink>
          <NavLink className="link link-hover">Privacy policy</NavLink>
          <NavLink className="link link-hover">Cookie policy</NavLink>
        </nav>
      </footer>
      <div className="w-full h-[1px] bg-brand"></div>
      <footer className="footer sm:footer-horizontal footer-center bg-transparent text-brand p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Pervaj
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
