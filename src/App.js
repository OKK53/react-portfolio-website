import Header from "components/Header";
import About from "components/About";
import SkillsSvg from "components/SkillsSvg";
import Projects from "components/Projects";
import Footer from "components/Footer";
import ScrollUp from "components/ScrollUp";
import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode ? "#8b949e" : "#222",
      }}
    >
      <Header />
      <About />
      <SkillsSvg />
      <Projects />
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
