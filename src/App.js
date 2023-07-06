import "./App.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="container mx-auto bg-light min-w-full min-h-screen">
      <div>
        <NavBar />
       
        <Footer />
      </div>
    </div>
  );
};
export default App;
