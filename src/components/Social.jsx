import { FiGithub } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";

function Social() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="flex gap-x-4 sm:grid gap-y-4 text-lg">
      <a
        href="https://github.com/OKK53"
        target="_blank"
        rel="noreferrer"
        className={
          darkMode
            ? "text-gray-400 hover:text-white text-2xl w-6 h-8"
            : "text-gray-400 hover:text-gray-800 text-2xl w-6 h-8"
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
            ? "text-gray-400 hover:text-white text-2xl w-6 h-8"
            : "text-gray-400 hover:text-gray-800 text-2xl w-6 h-8"
        }
      >
        <BsLinkedin />
      </a>
    </div>
  );
}

export default Social;
