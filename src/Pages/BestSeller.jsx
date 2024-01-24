import React from "react";
import { useLocation } from "react-router-dom";
import BooksComp from "../Components/Blogs/BooksComp";

const BestSeller = () => {
  const location = useLocation();
  // console.log(location, "uselocation");

  //Destsructuring
  const { data } = location.state;
  // console.warn(data);
  return (
    <>
      <div className="dark:bg-[#111827] dark:text-white">
        <div className="container py-10">
          {/* Book Details */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center ">
              <div>
                <img className="h-[330px]" src={data.img} />
              </div>
              <div>
                <h1 className="text-3xl font-bold">{data.title}</h1>
                <p className="text-gray-400 font-semibold"><b>By </b>{data.author}</p>

                <p className="text-lg"><b>Publication Date</b>{data.date}</p>

                <p className="py-4">{data.description}</p>
              </div>
            </div>
            <div> </div>
          </div>
        </div>
        <div>
          <BooksComp />
        </div>
      </div>
    </>
  );
};

export default BestSeller;
