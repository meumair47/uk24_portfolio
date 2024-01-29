import React from "react";
import ServicesCard from "../layouts/ServicesCard";
import { MdOutlineDesignServices } from "react-icons/md";
import { BiCodeAlt } from "react-icons/bi";
import { BsAndroid } from "react-icons/bs";
import { SiFreelancer } from "react-icons/si";
import { TbSourceCode } from "react-icons/tb";
import { TfiVideoClapper } from "react-icons/tfi";

const Services = () => {
  const icon3 = (
    <MdOutlineDesignServices size={55} className="text-brightColor" />
  );
  const icon1 = <BiCodeAlt size={55} className="text-brightColor" />;
  const icon2 = <BsAndroid size={55} className="text-brightColor" />;
  const icon4 = <SiFreelancer size={55} className="text-brightColor" />;
  const icon5 = <TbSourceCode size={55} className="text-brightColor" />;
  const icon6 = <TfiVideoClapper size={55} className="text-brightColor" />;
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" text-center font-semibold text-4xl mt-24 lg:mt-14 mb-8 lg:mb-4">
        My Services
      </h1>
      <div className=" flex flex-wrap items-center justify-center gap-5 mt-4">
        <ServicesCard
          icon={icon3}
          title="UI/UX design"
          para="Design , Prototypes"
        />
        <ServicesCard
          icon={icon1}
          title="Front-End Development"
          para="Bootstrap/Tailwind, React"
        />
        <ServicesCard
          icon={icon2}
          title="Fix Errors & Bugs"
          para="Front-End , Back-End"
        />
        <ServicesCard
          icon={icon5}
          title="Back-End Development"
          para="Nodejs, Expressjs, MongoDB"
        />
        <ServicesCard
          icon={icon4}
          title="Freelancing"
          para="Graphic designing, Web Dev"
        />
        <ServicesCard
          icon={icon6}
          title="Videos Editting"
          para="Camtasia , Adobe Premier Pro"
        />
      </div>
    </div>
  );
};

export default Services;
