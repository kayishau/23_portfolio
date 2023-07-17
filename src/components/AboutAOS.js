import React,{ useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function AboutPictures() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <>
     <div className="flex w-full mx-4 min-h-screen items-center justify-center">
       {/* <div className="h-20 w-20">
                <Barbell className={"w-10 h-10"}/>
                </div> */}
          <div id="picture-stack" className="flex flex-col">
            {/* <Fadein /> */}
            <div
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-delay="200"
            data-aos-offset="0"
              style={{
                backgroundImage: "url(/img/KU1.png)",
                height: "300px",
                width: "200px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              alt="Kayisha/designer"
            ></div>
            {/* <div 
                    style={{
                        backgroundImage: "url(/img/Kayisha-profile-pic.png)",
                        height: "300px",
                        width: "200px",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                      alt="Kayisha/travel"
                      ></div> */}
            <div
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-delay="500"
            data-aos-offset="0"
              style={{
                backgroundImage: "url(/img/KU3.png)",
                height: "300px",
                width: "200px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              alt="Kayisha/nature"
            ></div>
          </div>
          <div
            // data-aos="fade-right"
            // data-aos-easing="ease-in-sine"
            // data-aos-delay="1000"
            // data-aos-offset="0"
            data-aos="fade-up"
            data-aos-duration="2500"
            style={{
              backgroundImage: "url(/img/KU2.png)",
              height: "450px",
              width: "380px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            alt="Kayisha/main"
          ></div>
    </div>
    </>
   
  );
}