import { projects } from "data";
import { FaGithubAlt } from "react-icons/fa";

function Card() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4 font-poppins justify-center">
      {projects.map((project) => (
        <div
          key={project.id}
          className="block text-center border rounded-xl shadow-lg"
        >
          <img
            src={project.img}
            alt={project.title}
            className="rounded-t-lg mb-2 w-full h-auto object-cover"
          />
          <div className="block items-center px-6 pb-6">
            <div className="flex flex-wrap pt-2 mb-3 gap-x-3 gap-y-2 justify-center">
              {project.tags.map((tag) => (
                <span className="block p-2 text-sm bg-gray-500 text-white rounded font-medium items-center text-center justify-center">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="block text-2xl font-medium mb-1">{project.title}</h3>
            <p className="block text-base">{project.desc}</p>
            <div className="flex justify-center"></div>
          </div>
          <div className="flex items-center flex-wrap justify-center mb-2">
            <a
              href="https://github.com/OKK53"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-center px-2 py-1 gap-x-2 border rounded"
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
