import React from "react";
import { FaCartPlus } from "react-icons/fa";

const Button = ({ title }) => {
  return (
    <>
      <button  className=" flex text-white justify-center items-center gap-2 rounded-xl py-1 px-3 hover:scale-105 transition duration-300  bg-primaryColor  ">
        {title}
        <FaCartPlus />

      </button>
    </>
  );
};

export default Button;
