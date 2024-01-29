import React from "react";
import EducationCard from "../layouts/EducationCard";

const Education = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <div className=" mt-16">
        <h1 className=" text-center font-semibold text-4xl mt-24 lg:mt-16 mb-8 lg:mb-7">
          Education
        </h1>
      </div>
      <div className="bg-white p-5 rounded-md">
        <EducationCard
          title="Master of Science (CS)"
          university="University of Peshawar"
          date="Feb 2022 - Dec 2024"
          certificate="Computer Science"
          description="Attained a Master of Science in Computer Science from University of Peshawar, specializing in advanced computing technologies and research methodologies."
        />
        <EducationCard
          title="Bachelor of Science (CS)"
          university="University of Peshawar"
          date="Feb 2020 - Dec 2021"
          certificate="Computer Science"
          description="Earned a Bachelor of Science in Computer Science from the University of Peshawar, focusing on software development and computational theory."
        />
        <EducationCard
          title="Diploma of Associate Engineering"
          university="Government College of Technology"
          date="Feb 2019 - Dec 2022"
          certificate="DAE Electrical"
          description="I Completed Diploma of Associate Engineering from Government College of Technology, emphasizing practical skills and technical knowledge."
        />
      </div>
    </div>
  );
};

export default Education;
