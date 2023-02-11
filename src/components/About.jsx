import Social from "./Social";
import Data from "./Data";
// import cvimage from "assets/cvimage.png";
import test from "assets/test.jpg";
import ScrollDown from "./ScrollDown";

function About() {
  return (
    <section className="pt-24 pb-8 px-0">
      <div className="container mx-auto grid gap-y-28">
        {/*home_container container grid*/} {/*home_content grid*/}
        <div
          className="grid pt-8 gap-x-8 items-center"
          style={{ gridTemplateColumns: `116px repeat(2, 1fr)` }}
        >
          <Social />
          <div
            className="bg-no-repeat bg-center bg-cover w-[300px] h-[300px] order-1 justify-self-center animate-profile_animate"
            style={{
              backgroundImage: `url(${test})`,
              boxShadow: `inset 0 0 0 9px rgb(255 255 255/30%)`,
            }}
          ></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
}

export default About;
