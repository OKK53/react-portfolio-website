import { FiGithub } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
function Social() {
  return (
    <div className="grid gap-y-4 text-lg">
      <a
        href="https://github.com/OKK53"
        target="_blank"
        rel="noreferrer"
        className="text-gray-400 hover:text-gray-800"
      >
        <FiGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/oguz-kagan-kamil/"
        target="_blank"
        rel="noreferrer"
        className="text-gray-400 hover:text-gray-800"
      >
        <BsLinkedin />
      </a>
    </div>
  );
}

export default Social;
