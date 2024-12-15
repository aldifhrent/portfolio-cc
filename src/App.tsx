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

function App() {
  return (
    <>
      <div className="flex flex-col w-full">
        <Header />
        <Hero />
        <AboutMe />
        <MySkills />
        <Portfolio />
        <Experience />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
