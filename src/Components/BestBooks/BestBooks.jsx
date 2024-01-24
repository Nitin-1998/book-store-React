import React from "react";
import Book1 from "../../assets/BooksImage/bestbook1.jpg";
import Book2 from "../../assets/BooksImage/bestbook2.jpg";
import Book3 from "../../assets/BooksImage/bestbook3.jpg";
import Book4 from "../../assets/BooksImage/bestbook4.jpg";
import Book5 from "../../assets/BooksImage/bestbook5.jpg";

import { FaStar } from "react-icons/fa";

const bookDeatils = [
  {
    id: 1,
    img: Book1,
    title: "The Great Gatsby",
    author: "T.J. Eckleburg",
    stars: "5",
  },
  {
    id: 2,
    img: Book2,
    title: "Wuthering Heights",
    author: "Thrushcross Grance",
    stars: "4.5",
  },
  {
    id: 3,
    img: Book3,
    title: "Just A Girl Who Loves Books",
    author: "Ellen Jacob",
    stars: "4",
  },
  {
    id: 4,
    img: Book4,
    title: "Pride & Prejuidice",
    author: "Jane Austin",
    stars: "5",
  },
  {
    id: 5,
    img: Book5,
    title: "Mac De Niteroi",
    author: "Oscar Niemeyer",
    stars: "3",
  },
];

const BestBooks = () => {
  return (
    <>
      <main className="dark:bg-[#111827] dark:text-white pb-10 ">
        <div className="conatiner">
          <div
            data-aos="fade-up"
            className="text-center mb-20 py-10 dark:text-white "
          >
            <p className="text-primaryColor">Best Books</p>
            <h1 className="text-4xl font-semibold">Top Books</h1>
            <p className="text-gray-400 text-center ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
              iure, corporis
            </p>
          </div>
          {/* Card */}
          <div className="container">
            <div data-aos="fade-up" className=" px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-10 lg:grid-cols-5 place-items-center  ">
              {bookDeatils.map((data) => {
                return (
                  <>
                    <div>
                      <img
                        className=" rounded-xl max-w-[200px] max-h-[200px] "
                        src={data.img}
                      />
                      <h2 className="pt-3 line-clamp-1 font-semibold">
                        {data.title}
                      </h2>
                      <h3 className="text-sm">{data.author}</h3>
                      <span className="flex items-center gap-1">
                        <FaStar className="text-yellow-500" />
                        {data.stars}
                      </span>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BestBooks;
