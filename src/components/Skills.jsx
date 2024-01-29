import React from "react";
import SkillCard from "../layouts/SkillCard";

const Skills = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" text-center font-semibold text-4xl mt-24 lg:mt-14 mb-8 lg:mb-4">
        My Skills
      </h1>
      <div className=" flex flex-wrap items-center justify-center gap-5 mt-4">
        <SkillCard
          title="Designing"
          para="Figma,  Adobe XD,  Coral Draw,  Adobe Photoshop,  Canva Pro"
        />
        <SkillCard
          title="Front-End"
          para="Html, CSS, Bootstrap/Tailwind, Javascript, React"
        />
        <SkillCard title="Back-End" para="Node.js, Express.js" />
        <SkillCard title="DataBase" para="MySQL, MongoDB" />
        <SkillCard title="Tools" para="Git, GitHub" />
        <SkillCard
          title="Soft Skills"
          para="Communication, Problem-Solving, Teamwork, Time Management,
Adaptability, Fast Learner"
        />
       
      </div>
    </div>
  );
};


export default Skills;
