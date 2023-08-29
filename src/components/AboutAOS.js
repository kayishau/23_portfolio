import React,{ useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function AboutPictures() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <>
     <div className="flex items-center justify-center lg:-mr-5 mt-16 mb-3 lg:my-0 pb-5">
          <div id="picture-stack" className="flex lg:flex-col">
            {/* <Fadein /> */}
            <div
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-delay="200"
            data-aos-offset="0"
              style={{
                backgroundImage: "url(/img/KU1.png)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
              className="w-[110px] h-[130px] -mr-3 md:w-[250px] md:h-[300px] lg:w-[200px] lg:h-[220px] lg:ml-6 xl:h-[280px] xl:w-[210px] xl:bg-cover"
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
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
              className="w-[110px] h-[130px] md:w-[250px] md:h-[300px] lg:w-[200px] lg:h-[250px] xl:h-[280px] xl:w-[230px] xl:bg-cover"
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
              // height: "450px",
              // width: "380px",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            className="w-[120px] h-[140px] md:w-[270px] md:h-[320px] lg:w-[270px] lg:h-[320px] xl:h-[450px] xl:w-[380px]"
            alt="Kayisha/main"
          ></div>
    </div>
    </>
   
  );
}