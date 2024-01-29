import React from "react";
import img1 from "../assets/img/g.jpg";
import img2 from "../assets/img/i.jpg";
import img3 from "../assets/img/h.jpg";

const About = () => {

  return (
    <div className=" min-h-screen flex flex-col justify-around lg:gap-8 lg:px-32 px-5 bg-backgroundColor">
      <div className=" mt-16">
        <h1 className=" text-center font-semibold text-4xl mt-24 lg:mt-14 mb-8 lg:mb-4">
          About Me
        </h1>
      </div>
      <div className=" -mt-10">
        <div className=" mb-10">
          <h2 className=" text-3xl font-semibold">I am Muhammad Umair,</h2>
          <p className=" mt-4 lg:mt-2">
            MERN Stack developer with a strong background in computer science
            and a recent graduate from the University of Peshawar. I specialize
            in creating dynamic and responsive web applications in MongoDB,
            Express.js, React and Node.js.
            <br /> My work demonstrates a strict adherence to modern web
            development practices, demonstrating excellence in both front-end
            and back-end. I am zealous about coding, a problem solving and
            constantly updating my skills to keep up with developments in the
            business world. Welcome to my document where I share my journey in
            the world of web development and the new solutions I create.
          </p>
        </div>
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
      </div>
    </div>
  );
};

export default About;
