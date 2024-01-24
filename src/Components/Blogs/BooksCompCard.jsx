import React, { useState } from "react";
import Book1 from "../../assets/BooksImage/book1.jpg";
import Book2 from "../../assets/BooksImage/book2.jpg";
import Book3 from "../../assets/BooksImage/book3.jpg";
import { IoStarSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Popup from "../Popup/Popup";

const cardData = [
  {
    id: 1,
    img: Book1,
    title: "His Life",
    author: "John Henrik Clarke",
    date: "1st February 1999",
    description:
      " The author, one of the foremost scholars on Africa, fought to legitimize African history for more than 60 years. This book finally uncovers the tumultuous life of this great figure. Through a series of autobiographical essays, Clarke looks back on his lifelong struggle to restore African history to its proper place in the context of world history. His Life In broad terms, the book portrays Einstein as an insolent figure who possessed a strong sense of creativity and independence that, had the physicist succeeded in achieving academic employment as a young man, could have gotten quashed due to the atmosphere of the times",
  },
  {
    id: 1,
    img: Book2,
    title: "Who's there",
    author: " Wmily James ",
    date: "12th December 2001",
    description:
      "Who's there In broad terms, the book portrays Einstein as an insolent figure who possessed a strong sense of creativity and independence that, had the physicist succeeded in achieving academic employment as a young man, could have gotten quashed due to the atmosphere of the times",
  },
  {
    id: 1,
    img: Book3,
    title: "Lost Boy",
    author: " Roger William ",
    date: "12th January 2021",
    description:
      "Lost Boy His Life In broad terms, the book portrays Einstein as an insolent figure who possessed a strong sense of creativity and independence that, had the physicist succeeded in achieving academic employment as a young man, could have gotten quashed due to the atmosphere of the times",
  },
];

const BooksCompCard = () => {
  return (
    <>
      <div className="dark:bg-[#111827] py-10">
        <div className=" container">
          {/* Heading */}
          <div className="text-center mb-20 py-10 dark:text-white ">
            <p className="text-primaryColor">Trending Books</p>
            <h1 className="text-4xl font-semibold">Best Books</h1>
            <p className="text-gray-400 text-center ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
              iure, corporis
            </p>
          </div>
          {/* Book Cards */}
          <div
            data-aos="fade-in"
            data-aos-duration="900"
            className="h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-20 place-items-center "
          >
            {cardData.map((data) => {
              return (
                <>
                  <Link
                    to={`/bestSeller/${data.title}`}
                    state={{ data }}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <div
                      className="relative max-w-[300px] rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white hover:bg-primaryColor dark:hover:bg-primaryColor  shadow-xl duration-high group  "
                      key={data.id}
                    >
                      {/* Card Start */}
                      <div className=" h-[100px]">
                        <img
                          className=" max-w-[100px] block mx-auto transform  -translate-y-14 group-hover:scale-105  duration-300 shadow-md"
                          src={data.img}
                        />
                      </div>

                      <div className=" p-4 text-center ">
                        <div className="flex justify-center">
                          <IoStarSharp className="text-yellow-600" />
                          <IoStarSharp className="text-yellow-600" />
                          <IoStarSharp className="text-yellow-600" />
                          <IoStarSharp className="text-yellow-600" />
                          <IoStarSharp className="text-yellow-600" />
                        </div>

                        <h1 className="text-xl line-clamp-1 ">{data.title}</h1>
                        <p className=" text-center line-clamp-2  ">
                          {data.description}
                        </p>
                        <div className="py-3 flex justify-center">
                          <button className=" flex text-white justify-center items-center gap-2 rounded-xl py-2 px-4 hover:scale-105 transition duration-300  bg-primaryColor font-semibold group-hover:bg-white group-hover:text-primaryColor  ">
                            Know More
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BooksCompCard;
