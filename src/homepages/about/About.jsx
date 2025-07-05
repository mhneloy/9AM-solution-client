import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import perves_pic from "../../assets/perves.png";
const About = () => {
  return (
    <section className="bg-base-100 py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Profile Image */}
        <div className="w-96 h-96 flex justify-center items-center bg-brand rounded-full overflow-hidden shadow-lg border-4 border-[#260606]">
          <img
            src={perves_pic} // replace with your image path
            alt="Md Mahmudul Hassan Neloy"
            className="w-full h-full object-cover"
          />
        </div>

        {/* About Text */}
        <div className="text-center md:text-left space-y-4">
          <h2 className="text-6xl font-bold text-brand">About Me</h2>
          <h3 className="text-xl font-semibold text-[#260606]">SEO Expert</h3>
          <p className="text-base text-secondaryTxt max-w-xl">
            I'm a results-driven SEO specialist with a passion for helping
            businesses grow online. I focus on technical SEO, on-page
            optimization, and data-driven strategies to increase visibility and
            drive quality traffic. With a deep understanding of search
            algorithms and user intent, I bring measurable growth to your
            digital presence.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 pt-2 text-xl text-primary">
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-secondary transition duration-300" />
            </a>
            <a
              href="https://github.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-secondary transition duration-300" />
            </a>
            <a href="mailto:your@email.com">
              <FaEnvelope className="hover:text-secondary transition duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
