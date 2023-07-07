import React from "react";

const Home = () => {
  return (
    <section
      id="homeSection"
      style={{
        backgroundImage: "url(/img/flower.png)",
        marginTop: "-70px",
        height: "100vh",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
      className="flex items-center justify-center min-h-screen w-full"
    >
      <h2> HOME SECTION</h2>
    </section>
  );
};

export default Home;
