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
          height: "600px",
          width: "800px",
        }}
      >
        <div
          className="w-full min-h-screen flex items-center justify-end"
          style={{
            backgroundImage: "url(/img/contactbg.png)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "600px",
            width: "800px",
          }}
        >
          <div className="flex flex-col w-1/2 gap-4 mx-5 px-10 text-center ">
            <h2 className="text-3xl font-cg font-extrabold">Get it touch :)</h2>
            <p className="text-lg font-cg">
              If you have a project in mind, general questions, book/resource
              recomendations or want to connect about anything Dev, Web3 or
              design related, please reach out! Always down to meet new people,
              learn something new and/or colloborate 🧡.
            </p>
            <div className="flex border justify-start ml-4">
            <a
              href="mailto:ulyssekayisha@gmail.com"
              target={"_blank"}
              className=" text-lg text-dark font-cg font-extrabold underline"
            >
              <span>Email:</span>
            </a>
            <a
              href="mailto:ulyssekayisha@gmail.com"
              target={"_blank"}
              className="ml-4 text-lg text-dark font-cg font-extrabold"
            >
              <span className="hover:bg-primary hover:text-white p-1">ulyssekayisha@gmail.com</span>
            </a>
            </div>
            <div className="flex justify-start ml-4">
            <a
              href="https://calendly.com/ulyssekayisha"
              target={"_blank"}
              className=" text-lg text-dark font-cg font-extrabold underline"
            >
              <span>Calendly:</span>
            </a>
            <a
              href="https://calendly.com/ulyssekayisha"
              target={"_blank"}
              className="ml-4 text-lg text-dark font-cg font-extrabold"
            >
              <span className="hover:bg-primary hover:text-white p-1">Kayisha's calendly</span>
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

