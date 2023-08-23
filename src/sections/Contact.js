const Contact = () => {
  return (
    <>
      <section
        id="contactSection"
        className="w-full min-h-screen flex flex-col items-center justify-center border-t border-slate-500"
        style={{
          backgroundImage: "url(/img/finalTexture.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      >
        <div
          className="w-full min-h-screen flex items-center border justify-end border-black"
          style={{
            backgroundImage: "url(/img/contactbg.png)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "600px",
            width: "800px",
          }}
        >
          <div className="flex flex-col w-1/2 mx-5 px-10 text-center border border-black">
            <h2>Get it touch :)</h2>
            <p>
              If you have project in mind, general questions, book/resource
              recomendations or want to connect about anything Dev, Web3 or
              design related, please reach out! Always down to meet new people,
              learn something new and/or colloborate 🧡.
            </p>
            <div className="flex border border-purple-700 justify-start">
            <a
              href="mailto:ulyssekayisha@gmail.com"
              target={"_blank"}
              className="ml-4 text-lg text-dark font-cg font-extrabold underline"
            >
              <span>Email:</span>
            </a>
            <p>ulyssekayisha@gmail.com</p>
            </div>
            <div className="flex border border-purple-700 justify-start">
            <a
              href="https://calendly.com/ulyssekayisha"
              target={"_blank"}
              className="ml-4 text-lg text-dark font-cg font-extrabold underline"
            >
              <span>Calendly:</span>
            </a>
            <a
              href="https://calendly.com/ulyssekayisha"
              target={"_blank"}
              className="ml-4 text-lg text-dark font-cg font-extrabold"
            >
              <span>Kayisha's calendly</span>
            </a>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

