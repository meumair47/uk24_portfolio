import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" flex flex-col lg:flex-row justify-between lg:px-32 px-5 bg-white p-5">
      <div className=" flex gap-10">
        <a href="" target="_blank" rel="noopener noreferrer">
          <BsInstagram
            size={32}
            className=" hover:text-brightColor transition-all cursor-pointer"
          />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100007410309830"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook
            size={32}
            className=" hover:text-brightColor transition-all cursor-pointer"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/%E0%BC%BAum%CD%A5%E0%B8%AAi%CD%A3r%CD%AB-k%D1%92%E0%B8%AA%C5%88%E0%BC%BB-53964126b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            size={32}
            className=" hover:text-brightColor transition-all cursor-pointer"
          />
        </a>
      </div>
      <div className=" flex flex-row items-center cursor-pointer mt-5 lg:mt-0">
        <h1 className="text-3xl font-semibold">Muhammad.</h1>
      </div>
    </div>
  );
}

export default Footer