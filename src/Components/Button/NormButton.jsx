import React from "react";

const NormButton = ({title}) => {
  return (
    <button className=" flex text-white justify-center items-center gap-2 rounded-xl py-2 px-4 hover:scale-105 transition duration-300  bg-primaryColor font-semibold  ">
      {title}
    </button>
  );
};

export default NormButton;
