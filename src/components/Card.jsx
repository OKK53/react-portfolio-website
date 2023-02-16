import { projects } from "data";
import { FaGithubAlt } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";

function Card() {
  const theme = useContext(ThemeContext);
  const mode = theme.state.mode;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-7 font-poppins justify-center transition-all">
      {projects.map((project) => (
        <div
          key={project.id}
          className={
            mode === "light"
              ? "block text-center border rounded-xl shadow-lg"
              : "block text-center rounded-xl shadow-lg shadow-white"
          }
        >
          <img
            src={project.img}
            alt={project.title}
            className="rounded-t-lg mb-2 w-full h-auto object-cover"
          />
          <div className="block items-center px-6 pb-6">
            <div className="flex flex-wrap pt-2 mb-3 gap-x-3 gap-y-2 justify-center">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className={
                    mode === "light"
                      ? "block px-2 my-1 mr-1 text-sm bg-[#DDF4FF] text-[#0969DA] hover:text-white hover:bg-[#0969DA] rounded-3xl font-medium items-center text-center justify-center"
                      : "block px-2 my-1 mr-1 text-sm bg-[#388BFD26] text-[#58A6FF] hover:text-white hover:bg-[#0969DA] rounded-3xl font-medium items-center text-center justify-center"
                  }
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="block text-2xl font-medium mb-1">{project.title}</h3>
            <p className="block text-base">{project.desc}</p>
            <div className="flex justify-center"></div>
          </div>
          <div className="flex items-center flex-wrap justify-center mb-3">
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className={
                mode === "light"
                  ? "inline-flex items-center text-center px-5 py-2 gap-x-2 border rounded-md bg-[#DDF4FF] text-[#0969DA] hover:text-white hover:bg-[#0969DA]"
                  : "inline-flex items-center text-center px-5 py-2 gap-x-2 rounded-md bg-[#388BFD26] text-[#58A6FF] hover:text-white hover:bg-[#0969DA]"
              }
            >
              <FaGithubAlt />
              Repo
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
