import Social from "./Social";
import DataAbout from "./DataAbout";
import cvImage from "assets/cvImage.jpg";
// import test from "assets/test.jpg";
import ScrollDown from "./ScrollDown";

function About() {
  return (
    <section
      className="container mx-auto my-auto pt-36 pb-8 px-0 font-poppins h-screen"
      id="about"
    >
      <div className="container mx-auto grid gap-y-28">
        <div className="flex flex-col gap-y-5 pt-8 gap-x-8 items-center sm:grid sm:grid-cols-[116px_repeat(2,1fr)]">
          <Social />
          <DataAbout />
          <div
            className="bg-no-repeat bg-center bg-cover w-[300px] h-[300px] order-first sm:order-none justify-self-center animate-profile_animate"
            style={{
              backgroundImage: `url(${cvImage})`,
              boxShadow: `inset 0 0 0 9px rgb(255 255 255/30%)`,
            }}
          ></div>
        </div>
        <ScrollDown />
      </div>
    </section>
  );
}

export default About;
