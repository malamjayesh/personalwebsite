import Layout from "./components/layout/Layout"
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Education from "./pages/education/Education";
import Project from "./pages/project/Project";
import Techstack from "./pages/techstack/Techstack";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import Tada from "react-reveal/Tada";
import Mobilenav from "./components/mobilenav/Mobilenav";
import AnimatedCursor from "react-animated-cursor"
function App() {
  const [theme] = useTheme();
  return (
    <>
    <div id={theme}>
    <Layout/>
    <Mobilenav/>
    <div className="container">
    <About/>
    <Education/>
    <Techstack/>
    <Project/>
    <Contact/>
    </div>
    <div className="footer pb-3 ms-3">
      <Tada>
      <h4 className="text-center">
        Created by @jm007 &copy; 2024
      </h4>
      </Tada>
    </div>
    </div>
    <ScrollToTop
     smooth
     color="#f29f67"
      style={{backgroundColor:'#1e1e2c',borderRadius:'80px'}} />
      <AnimatedCursor
      color="153, 50, 204"
      />
   </>
  );
}

export default App;
