import Card from "components/Card";
import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";

function Projects() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section className="container mx-auto pt-24 pb-8 px-0 " id="projects">
      <h2 className="text-5xl text-center">Portfolio</h2>
      <h3 className="mt-4 mb-12 text-2xl text-center">
        My Personal Open Source Projects
      </h3>
      <Card />
      <div className="container mx-auto mt-12 justify-center items-center text-center">
        <a
          href="https://github.com/OKK53"
          target="_blank"
          rel="noreferrer"
          className={
            !darkMode
              ? "px-6 py-5 border-2 rounded-2xl font-poppins font-bold border-[#0969DA] text-[#0969DA] hover:text-white hover:bg-[#0969DA]"
              : "px-6 py-5 border-2 border-[#8b949e] rounded-2xl font-poppins font-bold bg-[#388BFD26] text-[#8b949e] hover:text-[#0969DA] hover:bg-[#8b949e]"
          }
        >
          MORE PROJECTS
        </a>
      </div>
    </section>
  );
}
export default Projects;
