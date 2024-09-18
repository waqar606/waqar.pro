import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from "../assets";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#0B1120] to-[#0B1120] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Waqar Ahmed</h3>
        <p className="text-lg font-normal text-gray-400">React Developer</p>
        <p className="text-base text-gray-400 tracking-wide">
          Want My Services Then Feel Free To Contact Me
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">03182015606</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">waqar.tech999@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a
            href="https://linkedin.com/in/waqar-ahmed-22bb18216/"
            target="_blank"
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a href="https://github.com/waqar606/" target="_blank">
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
