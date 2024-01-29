import React from "react";

const SkillCard = (props) => {
  return (
    <div className=" flex flex-col items-center bg-white hover:bg-black hover:text-white transition-all hover:-translate-y-2 lg:w-1/4 py-5 gap-4 cursor-pointer rounded-md">
      <h2 className=" text-xl font-semibold text-brightColor">{props.title}</h2>
      <p>{props.para}</p>
    </div>
  );
};

export default SkillCard;