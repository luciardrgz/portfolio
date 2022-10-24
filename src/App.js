import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Intro from "./Components/Intro/Intro";
import Present from "./Components/Present/Present";
import { Circles } from "./Components/Circles/Circles";
import Future from "./Components/Future/Future";
import Projects from "./Components/Projects/Projects";
//import Testimonial from "./Components/Testimonials/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Present />
      <Circles />
      <Future />
      <Projects />
      {/*<Testimonial /> --- Section that could be useful someday :) but not today */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
