const Contact = () => {
  return (
    <>
      <section
        id="contactSection"
        className="w-full min-h-screen flex flex-col items-center justify-center border-t border-slate-500"
      >
        <div
          className="w-full flex items-center tablet:justify-end justify-center bg-top tablet:bg-center tablet:mt-10 md:mt-0"
          style={{
            backgroundImage: "url(/img/contactbg.png)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            height: "600px",
            width: "800px",
          }}
        >
          <div className="flex flex-col w-full tablet:w-1/2 gap-4 mx-5 px-12 text-center mt-20 tablet:mt-0">
            <h2 className="font-cg text-2xl lg:text-3xl xl:text-4xl font-extrabold tablet:mb-3">Get in touch :)</h2>
            <p className="text-xs tablet:text-sm xl:text-lg font-cg text-center tablet:text-left tablet:mb-3 self-end">
              If you have a project in mind, general questions, book/resource
              recomendations or want to connect about anything Dev, Web3 or
              design related, please reach out! Always down to meet new people,
              learn something new and/or colloborate 🧡.
            </p>
            <div className="flex tablet:justify-start tablet:ml-4">
            <a
              href="mailto:ulyssekayisha@gmail.com"
              target={"_blank"}
              rel="noreferrer"
              className="text-sm md:text-lg text-dark font-cg font-extrabold underline"
            >
              <span>Email:</span>
            </a>
            <a
              href="mailto:ulyssekayisha@gmail.com"
              target={"_blank"}
              rel="noreferrer"
              className="text-sm ml-4 md:text-lg text-dark font-cg font-extrabold"
            >
              <span className="delay-150 hover:bg-primary hover:text-white p-1">ulyssekayisha@gmail.com</span>
            </a>
            </div>
            <div className="flex justify-start ml-4">
            <a
              href="https://calendly.com/ulyssekayisha"
              target={"_blank"}
              rel="noreferrer"
              className="text-sm md:text-lg text-dark font-cg font-extrabold underline"
            >
              <span>Calendly:</span>
            </a>
            <a
              href="https://calendly.com/ulyssekayisha"
              target={"_blank"}
              rel="noreferrer"
              className="text-sm ml-4 md:text-lg text-dark font-cg font-extrabold"
            >
              <span className="delay-150 hover:bg-primary hover:text-white p-1">Kayisha's calendly</span>
            </a>
            </div>
            
          </div>
          <div className="self-end pb-16 -ml-8 mr-8">
          <h1 className="font-cg  text-black text-2xl">5</h1>
        </div>
        </div>
       
      </section>
    </>
  );
};

export default Contact;

