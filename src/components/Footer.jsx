import { FiGithub } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { ImHeart } from "react-icons/im";
import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";

function Footer() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <footer className="border-t">
      <div className="pt-6 px-0 pb-2 font-poppins transition-all">
        <ul className="flex justify-center gap-x-8 mb-3">
          <li>
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-600">
              Skills
            </a>
          </li>
        </ul>
        <div className="flex justify-center gap-x-5">
          <a
            href="https://github.com/OKK53"
            target="_blank"
            rel="noreferrer"
            className={
              darkMode
                ? "text-3xl p-2 rounded-lg text-gray-400 hover:text-white"
                : "text-3xl p-2 rounded-lg text-gray-400 hover:text-gray-800"
            }
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/oguz-kagan-kamil/"
            target="_blank"
            rel="noreferrer"
            className={
              darkMode
                ? "text-3xl p-2 rounded-lg text-gray-400 hover:text-white"
                : "text-3xl p-2 rounded-lg text-gray-400 hover:text-gray-800"
            }
          >
            <BsLinkedin />
          </a>
        </div>
        <span className="block mt-3 text-center text-sm font-poppins">
          &#169; 2023 AKAOKK. Made with
          <ImHeart className="inline-block justify-center text-center mx-1 text-red-600" />{" "}
          by Oğuz Kağan
        </span>
      </div>
    </footer>
  );
}

export default Footer;
