import React from "react";
import img from "../../assets/library-img.jpg";
import { IoMdLock } from "react-icons/io";
import { FaTruck } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import { MdLocalOffer } from "react-icons/md";




const Banner = () => {
  return (
    <>
      <main className=" dark:bg-[#111827] dark:text-white  ">
        <div className="container p-10 ">
          <div  className="grid grid-cols-1 sm:grid-cols-2 place-content-center gap-10 py-10 ">
            <div data-aos="fade-in"
          data-aos-duration="900" className="">
              <img className="h-full shadow-[-15px_35px_60px_-15px_rgba(0,0,0,0.9)]  bg-cover " src={img} />
            </div>
            <div data-aos="fade-up"
           className="flex flex-col justify-center">
              <div>
                <h1 className="text-3xl font-semibold py-2">Library at your fingertips</h1>
                <p className="text-gray-400 pb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero odio minus enim sint quia architecto distinctio
                  quisquam autem suscipit praesentium?
                </p>
              </div>
              <div>
                <div className="flex flex-col gap-4 ">
                  <div className="flex justify-start gap-2 items-center">
                    <IoMdLock
                      className="bg-[#a78bfa] p-3 rounded-full"
                      size={49}
                    />
                    <p>Quality Books</p>
                  </div>
                  <div className="flex justify-start gap-2 items-center">
                    <FaTruck
                      className="bg-[#facc15] p-3 rounded-full"
                      size={49}
                    />
                    <p>Fast Delivery</p>
                  </div>
                  <div className="flex justify-start gap-2 items-center">
                    <CiCreditCard1
                      className="bg-[#4ade80] p-3 rounded-full"
                      size={49}
                    />
                    <p>Easy Payment method</p>
                  </div>
                  <div className="flex justify-start gap-2 items-center">
                    <MdLocalOffer
                      className="bg-[#fb923c] p-3 rounded-full"
                      size={49}
                    />
                    <p>Get offers on books</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Banner;
