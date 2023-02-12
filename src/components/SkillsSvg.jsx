import { skillsSvg } from "data";
import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";

function SkillsSvg() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section className="container mx-auto  pt-24 pb-8 px-0" id="skills">
      <h2 className="text-5xl text-center">Skills</h2>
      <h3 className="mb-12 text-2xl text-center">My technical level</h3>
      <div className="container mx-auto w-[1200px]">
        <ul className="flex flex-wrap gap-x-7 gap-y-6 p-6 justify-center ">
          {skillsSvg.map((skill) => {
            return (
              <li
                key={skill.id}
                className={
                  darkMode
                    ? "p-2 grayscale-0 hover:grayscale"
                    : "p-2 grayscale hover:grayscale-0"
                }
              >
                <img
                  src={skill.svg}
                  alt={skill.name}
                  className="h-16 w-max-[230px]"
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
export default SkillsSvg;
