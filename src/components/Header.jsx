// import { BsPersonCircle } from "react-icons/bs";
// import { IoMdSchool } from "react-icons/io";
// import { AiOutlineAppstore, AiOutlineClose } from "react-icons/ai";
//dark-light
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-10 bg-white">
      <nav className="flex justify-around">
        <div>
          <a href="/">OKK</a>
        </div>
        <ul className="flex gap-x-8">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Skills</a>
          </li>
          <li className="flex">
            <MdOutlineLightMode />
            <MdOutlineDarkMode />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
