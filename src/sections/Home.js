import React from "react";

const Home = () => {
  return (
    <section
      id="homeSection"
      style={{
        backgroundImage: "url(/img/flower.png)",
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="flex items-center justify-center min-h-screen w-full bg-dark "
    >
      <h2> HOME SECTION</h2>
    </section>
  );
};

export default Home;
