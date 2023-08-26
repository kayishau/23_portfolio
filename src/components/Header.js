import React from "react";

const Header = () => {
  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  const renderNavLinks = (content) => {
    const scrollToId = `${content.toLowerCase()}Section`;

    const handleClickNav = () => {
      document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" });
    };

    return (
      <>
       
        <ul key={content} className="inline-block px-5 mt-1 hover:bg-primaryDark hover:text-white hover:font-bold items-center justify-center">
          <li>
            <button onClick={handleClickNav} id="myImage"
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
