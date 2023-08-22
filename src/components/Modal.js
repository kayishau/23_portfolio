import React from "react"
// import ctl from "../../src/ctlDemo.mp4"

const Modal = ({open, onClose}) => {
    if(!open) return null
  return (
    <div className="">
     <div 
       style={{
        height: "500px",
        width: "500px",
        backgroundColor: "black"
    }} 
     >
        {/* <source
        style={{
            height: "100px",
            width: "100px",
            backgroundColor: "black"
        }}  
         src={ctl} alt="" 
         /> */}
        <div className=" text-white">
            <p onClick={onClose} className="">Close</p>
        </div>
     </div>
    </div>
  )
};

export default Modal;
