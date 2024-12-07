import "./App.css";
import AboutMe from "./components/about-me";
import Experience from "./components/experience";
import Header from "./components/header";
import Hero from "./components/hero";
import MySkills from "./components/skills";
import Portfolio from "./components/portfolio";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";
import Footer from "./components/footer";

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
        <Contact />
        <Footer />
        {/* Contact */}
        {/* Footer */}
      </div>
    </>
  );
}

export default App;
