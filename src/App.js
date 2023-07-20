import "./App.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";


const App = () => {
  return (
    <div className="w-screen mx-auto bg-gradient-to-r from-white to-gradientOne min-w-full min-h-screen "
    // style={{
    //   backgroundImage: "url(public/img/mesh-gradient-bg2.png",
    //   height: "800px",
    //   width: "800px",
    //   backgroundSize: "cover",
    //   backgroundRepeat: "no-repeat",
    // }}
    >
      <div>
        <NavBar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};
export default App;
