import FrontendInfo from "./FrontendInfo";
import BackendInfo from "./BackendInfo";

function Skills() {
  return (
    <section className="container mx-auto  pt-24 pb-8 px-0" id="skills">
      {/*skills sections*/}
      <h2 className="text-5xl text-center">Skills</h2>
      <h3 className="mb-12 text-2xl text-center">My technical level</h3>
      <div
        className="grid gap-x-12 justify-center"
        style={{ gridTemplateColumns: `repeat(2,450px)` }}
      >
        {/*skills_container container grid*/}
        <FrontendInfo />
        <BackendInfo />
      </div>
    </section>
  );
}

export default Skills;
