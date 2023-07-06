import "./App.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";


const App = () => {
  return (
    <div className="container mx-auto bg-light min-w-full min-h-screen">
      <div>
       
        <NavBar />
        <Home />
        <About />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};
export default App;
