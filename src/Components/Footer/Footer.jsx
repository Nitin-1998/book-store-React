import React from "react";
import Logo from "../../assets/logo.png";
import {
  FaMapMarkerAlt,
  FaMobile,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="dark:bg-[#030712] dark:text-white">
        <div className=" h-[730px] flex justify-center sm:h-[500px] relative  ">
          {/* Footer */}
          <div className=" container lg:px-32 pt-6 absolute ">
            <div className=" bg-white shadow-xl  dark:bg-[#030712] backdrop-blur-sm pt-2 pb-4 bg-transparent px-6 gap-5 rounded-t-xl  grid grid-cols-1 sm:grid-cols-1 sm:gap-0 md:grid-cols-2 ">
              <div className=" lg:px-[70px] lg:mt-12 ">
                <div>
                  <div className="flex items-center text-3xl font-semibold">
                    <img className=" h-16" src={Logo} />
                    <h1>Books</h1>
                  </div>
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde facere ab hic accusamus omnis dolor voluptatibus illo,
                    tempore eum tenetur.
                  </p>
                </div>

                <div className="">
                  <div className="flex justify-start gap-2 items-center py-2">
                    <FaMapMarkerAlt size={20} />
                    <p>Delhi, New Delhi</p>
                  </div>
                  <div className="flex justify-start gap-2 items-center">
                    <FaMobile size={20} />
                    <p>Delhi, New Delhi</p>
                  </div>
                  <div className="flex my-2 gap-4">
                    <FaFacebook size={36} />
                    <FaInstagram size={36} />
                    <FaLinkedin size={36} />
                  </div>
                </div>
              </div>

              {/* partician */}
              <div className="grid md:gap-4 place-content-center grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-1 p-2 ">
                <div className=" ">
                  <h1 className="text-xl font-semibold">Important Links</h1>
                  <ul>
                    <li className=" duration-300 hover:text-primary hover:translate-x-1 py-2 text-gray-600 ">
                      <span className="pr-2">&#11162;</span>
                      <span> Home </span>
                    </li>
                    <li className=" duration-300 hover:text-primary hover:translate-x-1 py-2 text-gray-600 ">
                      <span className="pr-2">&#11162;</span>
                      <span> Best Seller </span>
                    </li>
                    <li className=" duration-300 hover:text-primary hover:translate-x-1 py-2 text-gray-600 ">
                      <span className="pr-2">&#11162;</span>
                      <span> Tranding Books </span>
                    </li>
                  </ul>
                </div>

                <div className=" ">
                  <h1 className="text-xl font-semibold">Important Links</h1>
                  <ul>
                    <li className=" duration-300 hover:text-primary hover:translate-x-1 py-2 text-gray-600 ">
                      <span className="pr-2">&#11162;</span>
                      <span> Home </span>
                    </li>
                    <li className=" duration-300 hover:text-primary hover:translate-x-1 py-2 text-gray-600 ">
                      <span className="pr-2">&#11162;</span>
                      <span> Best Seller </span>
                    </li>
                    <li className=" duration-300 hover:text-primary hover:translate-x-1 py-2 text-gray-600 ">
                      <span className="pr-2">&#11162;</span>
                      <span> Tranding Books </span>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <h1 className="text-xl font-semibold">Important Links</h1>
                  <ul>
                    <li className=" duration-300 hover:text-primary hover:translate-x-1 py-2 text-gray-600 ">
                      <span className="pr-2">&#11162;</span>
                      <span> Home </span>
                    </li>
                    <li className=" duration-300 hover:text-primary hover:translate-x-1 py-2 text-gray-600 ">
                      <span className="pr-2">&#11162;</span>
                      <span> Best Seller </span>
                    </li>
                    <li className=" duration-300 hover:text-primary hover:translate-x-1 py-2 text-gray-600 ">
                      <span className="pr-2">&#11162;</span>
                      <span> Tranding Books </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* copyright */}
            <div className="bg-primary text-center h-[30px]  ">
              <hr />
              <p className="py-2  dark:text-white">
                @copyright 2024 All rights reserved || Made with ❤️ by Nitin
                Kumar
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
