import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <div>
        <Navbar />
        <main>
          <div id="home">
            <Home />
          </div>
          <div id="services">
            <Services/>
          </div>
          <div id="education">
            <Education/>
          </div>
          <div id="skills">
            <Skills/>
          </div>
          <div id="about">
            <About/>
          </div>
          <div id="portfolio">
            <Portfolio/>
          </div>
        </main>
        <Footer/>
      </div>
    </>
  );
}

export default App;
