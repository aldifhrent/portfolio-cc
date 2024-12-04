import "./App.css";
import AboutMe from "./components/about-me";
import Experience from "./components/experience";
import Header from "./components/header";
import Hero from "./components/hero";
import { MySkills } from "./components/my-skills";
import Portfolio from "./components/portfolio";
import Testimonials from "./components/testimonials";

/*************  ✨ Codeium Command ⭐  *************/
/******  1670f977-02cb-4425-aef1-e0a3e8526acf  *******/ function App() {
  return (
    <>
      <div className="">
        <Header />
        <Hero />
        <AboutMe />
        <MySkills />
        <Portfolio />
        <Experience />
        <Testimonials />
        {/* Testimonial */}
        {/* Contact */}
        {/* Footer */}
      </div>
    </>
  );
}

export default App;
