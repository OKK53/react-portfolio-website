import { BsPersonCircle } from "react-icons/bs";
import { AiOutlineAppstore, AiOutlineClose } from "react-icons/ai";
import { GiBrain } from "react-icons/gi";
import { SiCodeproject } from "react-icons/si";
//dark-light
import { useContext, useState } from "react";
import { ThemeContext } from "context/ThemeContext";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

function Header() {
  const theme = useContext(ThemeContext);
  const mode = theme.state.mode;
  const [showToggle, setShowToggle] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const handleClick = () => {
    setShowToggle(!showToggle);
    theme.dispatch({ type: "TOGGLE_THEME" });
  };
  const handleStore = () => {
    setShowNav(!showNav);
  };
  return (
    <header>
      <div
        className={
          mode === "dark"
            ? "hidden md:flex w-full h-16 fixed top-0 left-0 z-10 bg-[#222] py-3 px-16 border-b border-white"
            : "hidden md:flex w-full h-16 fixed top-0 left-0 z-10 bg-white py-3 px-16 border-b"
        }
      >
        <nav className="flex w-full h-12 justify-around items-center font-poppins text-xl transition-all">
          <div className="text-center p-2">
            <a
              href="/"
              className={mode === "dark" ? "text-#8b949e" : "text-black"}
            >
              OKK
            </a>
          </div>
          <ul className="flex gap-x-8 items-center p-2">
            <li>
              <a
                href="#about"
                className={
                  mode === "dark"
                    ? "text-#8b949e cursor-pointer hover:text-blue-600"
                    : "text-black cursor-pointer hover:text-blue-600"
                }
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={
                  mode === "dark"
                    ? "text-#8b949e cursor-pointer hover:text-blue-600"
                    : "text-black cursor-pointer hover:text-blue-600"
                }
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={
                  mode === "dark"
                    ? "text-#8b949e cursor-pointer hover:text-blue-600"
                    : "text-black cursor-pointer hover:text-blue-600"
                }
              >
                Projects
              </a>
            </li>
            <li
              className={
                mode === "dark"
                  ? "text-#8b949e flex hover:text-blue-600"
                  : "flex hover:text-blue-600"
              }
            >
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
      </div>
      {/* Mobile nav */}
      <div
        className={
          mode === "light"
            ? `fixed flex md:hidden bottom-0  w-full border-t justify-between px-4 items-center font-poppins 
      transition-all text-xl z-10 bg-white  ${showNav ? "h-[30%]" : "h-16"}`
            : `fixed flex md:hidden bottom-0  w-full border-t justify-between px-4 items-center font-poppins 
      transition-all text-xl z-10 bg-[#222] border-t-white ${
        showNav ? "h-[30%]" : "h-20"
      }`
        }
      >
        {showNav && (
          <div className="mx-auto flex justify-center items-center text-center">
            <ul className="flex gap-x-8 items-center p-2 mb-3">
              <li className="">
                <a
                  onClick={handleStore}
                  href="#about"
                  className={
                    mode === "dark"
                      ? "text-#8b949e cursor-pointer hover:text-blue-600 flex flex-col items-center gap-y-2"
                      : "text-black cursor-pointer hover:text-blue-600 flex flex-col items-center gap-y-2"
                  }
                >
                  <BsPersonCircle />
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={handleStore}
                  href="#skills"
                  className={
                    mode === "dark"
                      ? "text-#8b949e cursor-pointer hover:text-blue-600 flex flex-col items-center gap-y-2"
                      : "text-black cursor-pointer hover:text-blue-600 flex flex-col items-center gap-y-2"
                  }
                >
                  <GiBrain />
                  Skills
                </a>
              </li>
              <li>
                <a
                  onClick={handleStore}
                  href="#projects"
                  className={
                    mode === "dark"
                      ? "text-#8b949e cursor-pointer hover:text-blue-600 flex flex-col items-center gap-y-2"
                      : "text-black cursor-pointer hover:text-blue-600 flex flex-col items-center gap-y-2"
                  }
                >
                  <SiCodeproject />
                  Projects
                </a>
              </li>
            </ul>
          </div>
        )}
        <div className="absolute bottom-0 mb-4 text-center">
          <a
            href="#about"
            className={mode === "dark" ? "text-#8b949e" : "text-black"}
          >
            OKK
          </a>
        </div>
        <div
          className="absolute bottom-0 mb-4 right-5 justify-center items-center text-2xl cursor-pointer hover:text-blue-600"
          onClick={handleStore}
        >
          {!showNav ? <AiOutlineAppstore /> : <AiOutlineClose />}
        </div>
        {showNav && (
          <div
            className={
              mode === "dark"
                ? "text-#8b949e flex hover:text-blue-600 absolute top-0 right-5 mt-4"
                : "flex hover:text-blue-600 absolute top-0 right-5 mt-4"
            }
          >
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
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
