import "./App.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";



const App = () => {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-white to-gradientOne"
    >
      <div className="flex flex-col w-full"
      //  style={{
      //   backgroundImage: "url(/img/PaperTexture.png)",
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   backgroundAttachment: "fixed",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      // }} 
      >
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


