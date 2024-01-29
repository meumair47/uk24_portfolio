import React from "react";
import img from "../assets/img/1.png";
import Button from "../layouts/Button";
const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:flex-row items-center lg:px-32 px-5 bg-backgroundColor">
      <div className=" flex flex-col items-center lg:text-start lg:items-start w-full lg:w-3/4 space-y-4">
        <h1 className=" text-5xl font-semibold leading-tight mt-24">
          I'm Muhammad Umair <br />
          <span className=" text-brightColor">Full stack </span>
          Developer
        </h1>
        <p>
          I am a professional and dedicated end-to-end developer with a proven
          track record of building quality, scalable and efficient web products.
          With my expertise in front-end and back-end technologies, I seamlessly
          integrate user-friendly interfaces with powerful server-side
          functionality. He is an expert in many programming languages ​​and
          frameworks, including HTML, CSS, JavaScript, React, Node.js and many
          other information technologies.
        </p>
        <Button title="Hire Me" />
      </div>
      <div className=" mt-20">
        <img width={400} src={img} alt="" />
      </div>
    </div>
  );
};

export default Home;
