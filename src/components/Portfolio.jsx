import React from "react";
import img1 from "../assets/img/home.png";
import img2 from "../assets/img/homeCode.png";
import img3 from "../assets/img/service.png";
import img4 from "../assets/img/footer.png";
import img5 from "../assets/img/about.png";
import img6 from "../assets/img/contact.png";

const Portfolio = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 bg-backgroundColor">
      <div className=" mt-16">
        <h1 className=" text-center font-semibold text-4xl mt-24 lg:mt-14 mb-8 lg:mb-4">
          Portfolio
        </h1>
      </div>

      <div className=" flex items-center justify-center flex-wrap gap-10 pb-5 lg:pb-0">
        <div className=" w-full lg:w-1/4">
          <img
            className=" transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
            src={img1}
            alt="img"
          />
        </div>
        <div className=" w-full lg:w-1/4">
          <img
            className=" transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
            src={img2}
            alt="img"
          />
        </div>
        <div className=" w-full lg:w-1/4">
          <img
            className=" transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
            src={img3}
            alt="img"
          />
        </div>
        <div className=" w-full lg:w-1/4">
          <img
            className=" transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
            src={img4}
            alt="img"
          />
        </div>
        <div className=" w-full lg:w-1/4">
          <img
            className=" transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
            src={img5}
            alt="img"
          />
        </div>
        <div className=" w-full lg:w-1/4">
          <img
            className=" transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
            src={img6}
            alt="img"
          />
        </div>
        {/* <div className=" w-full lg:w-1/4">
          <img
            className=" transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
            src={img6}
            alt="img"
          />
        </div>  */}
      </div>
    </div>
  );
};

export default Portfolio;
