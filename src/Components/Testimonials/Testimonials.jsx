import React from "react";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
  return (
    <>
      <div className="dark:bg-[#111827] dark:text-white">
        <div className="container w-full h-screen">
          <div>
            <div>
              <div className="text-center mb-20 py-10 dark:text-white ">
                <p className="text-primaryColor">What Readers Say</p>
                <h1 className="text-4xl font-semibold">Testimonials</h1>
                <p className="text-gray-400 text-center ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Culpa iure, corporis
                </p>
              </div>
            </div>
            <div>
                <TestimonialsCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
