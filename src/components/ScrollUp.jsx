import { useState } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";

function ScrollUp() {
  const [show, setShow] = useState(false);
  const theme = useContext(ThemeContext);
  const mode = theme.state.mode;

  window.addEventListener("scroll", function () {
    //when the scroll is higher than 100 vh, show the scroll-icon
    if (this.scrollY >= 200 ? setShow(true) : setShow(false));
  });
  return (
    show && (
      <a
        href="#about"
        className="fixed right-2 md:right-10 bottom-12 opacity-80 py-9 px-2 rounded-md z-20 transition-all"
      >
        <BsFillArrowUpSquareFill
          className={
            mode === "dark"
              ? "text-3xl  text-[#8b949e]] hover:text-stone-600"
              : "text-3xl  text-stone-600 hover:text-black"
          }
        />
      </a>
    )
  );
}

export default ScrollUp;
