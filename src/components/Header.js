import React, { useState } from "react";

const Header = () => {
  const navLinks = ["Home", "About", "Skills", "Projects"];
  const [isImageVisible, setImageVisible] = useState(true);

  const renderNavLinks = (content) => {
    const scrollToId = `${content.toLowerCase()}Section`;

    const handleClickNav = () => {
      document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" });
    };

    const hideImage = () => {
        console.log(isImageVisible);
      setImageVisible(false);
    //   <img id="myImage" 
    //     style={{
    //     backgroundImage: "none",
    //     height: "80px",
    //     width: "90px",
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-repeat",
    // }}></img>
      
    };

    const showImage = () => {
        console.log(isImageVisible);
      setImageVisible(true);
//       <img id="myImage" 
//       style={{
//       backgroundImage: "url(/img/nav-back.png)",
//       height: "80px",
//       width: "90px",
//       backgroundSize: "cover",
//       backgroundRepeat: "no-repeat",
//   }}></img>
    };

    return (
      <>
      
        <ul key={content} className="inline-block px-5 my-5">
          <li>
         
            <button onClick={handleClickNav} id="myImage"
            
            // style={{
            //     backgroundImage: "url(/img/nav-back.png)",
            //     height: "80px",
            //     width: "90px",
            //     backgroundSize: "cover",
            //     backgroundRepeat: "no-repeat",
            // }}
            //  {isImageVisible ? onMouseEnter={showImage} : onMouseLeave={hideImage}}
            onMouseEnter={showImage}
            onMouseLeave={hideImage}
            >{content}
            </button>
          </li>
        </ul>
      </>
    );
  };

  return (
    <header>
      <div>
        <nav className="flex items-center">
          {navLinks.map((nav) => renderNavLinks(nav))}
          {/* TODO: modal ? */}
          <p className="px-4">Contact Me</p>
        </nav>
      </div>
    </header>
  );
};

export default Header;
