import "./App.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Modal from "./components/Modal";
import { useState } from "react";



const App = () => {
  const [openModal, setOpenModal] = useState(false)
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
        <button onClick={() => setOpenModal(true)} onClose={()=> setOpenModal(false)}>Modal</button>
                <Modal open={openModal}  onClose={()=> setOpenModal(false)}/>
        <Contact />
        <Footer />
      </div>
    </div>
  );
};
export default App;


