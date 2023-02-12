// import { BsPersonCircle } from "react-icons/bs";
// import { IoMdSchool } from "react-icons/io";
// import { AiOutlineAppstore, AiOutlineClose } from "react-icons/ai";
//dark-light
import { useContext, useState } from "react";
import { ThemeContext } from "context/ThemeContext";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

function Header() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [showToggle, setShowToggle] = useState(false);

  const handleClick = () => {
    setShowToggle(!showToggle);
    theme.dispatch({ type: "TOGGLE_THEME" });
  };
  return (
    <header
      className={
        darkMode
          ? "w-full h-16 fixed top-0 left-0 z-10 bg-[#222] py-3 px-16 border-b border-white"
          : "w-full h-16 fixed top-0 left-0 z-10 bg-white py-3 px-16 border-b"
      }
    >
      <nav className="flex w-full h-12 justify-around items-center font-poppins text-xl transition-all">
        <div className="text-center p-2">
          <a href="/" className={darkMode && "text-white"}>
            OKK
          </a>
        </div>
        <ul className="flex gap-x-8 items-center p-2">
          <li>
            <a
              href="/"
              className={
                darkMode
                  ? "text-white cursor-pointer hover:text-blue-600"
                  : "text-black cursor-pointer hover:text-blue-600"
              }
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/"
              className={
                darkMode
                  ? "text-white cursor-pointer hover:text-blue-600"
                  : "text-black cursor-pointer hover:text-blue-600"
              }
            >
              Skills
            </a>
          </li>
          <li className={(darkMode && "text-white flex") || "flex"}>
            {showToggle ? (
              <MdOutlineLightMode
                onClick={handleClick}
                className="cursor-pointer"
              />
            ) : (
              <MdOutlineDarkMode
                onClick={handleClick}
                className="cursor-pointer"
              />
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
