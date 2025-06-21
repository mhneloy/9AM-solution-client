import {
  FaClock,
  FaFacebookF,
  FaGithub,
  FaHeart,
  FaLinkedinIn,
  FaUser,
} from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { Link } from "react-router-dom";
import "./banner.css";
import { Typewriter } from "react-simple-typewriter";
import CountUp from "react-countup";
const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200">
        <div className="flex flex-col justify-between items-center lg:flex-row-reverse py-4 ">
          <div className="w-full px-4 lg:px-0 lg:w-2/5 flex justify-end">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="w-full lg:max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div className="w-full px-4 lg:px-0 lg:w-3/5">
            <h1 className="text-6xl font-bold">
              <span className="text-brand">He</span>llo
              <span className="text-brand">!</span>
            </h1>
            <h3 className="text-4xl font-bold mt-2">
              I'm{" "}
              <sapn className="text-brand">
                <Typewriter
                  words={["Pervej Hanif"]}
                  loop="true"
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={100}
                  delaySpeed={1000}
                />
              </sapn>
            </h3>
            <h4 className="text-2xl mt-2 font-semibold">
              A Digital Marketing Expert and Ads Specialist
            </h4>
            <p className="py-6">
              Dedicated to empowering businesses with impactful strategies as a
              digital marketing expert and ads specialist, focused on creating
              high-performing ad campaigns that drive measurable results and
              ensure long-term success.
            </p>
            {/* social icons */}
            <div className="flex gap-4 mb-6">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle group bg-brand text-white hover:bg-transparent hover:text-brand border border-brand"
              >
                <FaFacebookF className="banner-icon-animation" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle group bg-brand text-white hover:bg-transparent hover:text-brand border border-brand"
              >
                <FaLinkedinIn className="banner-icon-animation" />
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle group bg-brand text-white hover:bg-transparent hover:text-brand border border-brand"
              >
                <FaGithub className="banner-icon-animation" />
              </Link>
            </div>
            <button className="btn hover:bg-transparent hover:text-brand bg-brand text-white border-brand">
              Download CV
            </button>
          </div>
        </div>
      </div>
      {/* counter up */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-3 justify-center">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="btn w-20 h-20 btn-circle bg-brand text-white   hover:bg-transparent hover:text-brand border border-brand p-2">
            <MdDone className=" text-4xl" />
          </div>
          <CountUp end={100} className="text-2xl font-bold" />
          <p className="text-2xl font-semibold text-brand">Project Complete</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="btn w-20 h-20 btn-circle bg-brand text-white   hover:bg-transparent hover:text-brand border border-brand p-2">
            <FaUser className=" text-4xl" />
          </div>
          <CountUp end={100} className="text-2xl font-bold" />
          <p className="text-2xl font-semibold text-brand">Clinets</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="btn w-20 h-20 btn-circle bg-brand text-white   hover:bg-transparent hover:text-brand border border-brand p-2">
            <FaHeart className=" text-4xl" />
          </div>
          <CountUp end={100} className="text-2xl font-bold" />
          <p className="text-2xl font-semibold text-brand">Happy Clients</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="btn w-20 h-20 btn-circle bg-brand text-white   hover:bg-transparent hover:text-brand border border-brand p-2">
            <FaClock className=" text-4xl" />
          </div>
          <CountUp end={100} className="text-2xl font-bold" />
          <p className="text-2xl font-semibold text-brand">On Going Projects</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
