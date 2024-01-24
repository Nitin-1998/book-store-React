import React, { useState } from "react";
import NormButton from "../Button/NormButton";
import Book1 from "../../assets/BooksImage/book1.jpg";
import Book2 from "../../assets/BooksImage/book2.jpg";
import Book3 from "../../assets/BooksImage/book3.jpg";
import Popup from "../Popup/Popup";

const ImageList = [
  {
    id: 1,
    img: Book1,
    title: "His Life Will Forever Be Changed",
    Author: "Mein Kampf",
    description:
      "Trying it God's way is a book about wanting to do things different where all else has failed. It's about giving hope to the hopeless, encouraging those who seek to find a different direction in life and making better choices. Teaching people about trusting God and in His word. Inspiring those who feel like nothing in their livesis going right. Even for those who want to make a difference in this world or in someone else's life. May they find peace in knowing that there is a better way, God's way.",
  },
  {
    id: 2,
    img: Book2,
    title: "Who's there",
    Author: " E.M.Forster",
    description:
      "The cats are mewing in panic. Strange voices are calling from the attic. Who's there?? The hook books are for very small readers, aged five and above (for being read to) and six and above (for reading independently). written by some of the best-known writers for children, and illustrated in exuberant colour by some of India's most-loved illustrators. Hawaldar hook is the endearing mascot of the hook books.",
  },
  {
    id: 3,
    img: Book3,
    title: "Lost Boy",
    Author: "H.G. Wells",
    description:
      "Peter brought me to his island because there were no rules and no grownups to make us mind. He brought boys from the Other Place to join in the fun, but Peter's idea of fun is sharper than a pirates sword. Because its never been all fun and games on the island. Our neighbors are pirates and monsters. Our toys are knife and stick and rock—the kinds of playthings that bite.",
  },
];

const Hero = () => {
  const [imageId, setImageId] = useState(Book1);
  const [title, setTitle] = useState("His Life Will Forever Be Changed");
  const [author, setAuthor] = useState("Mein Kampf");
  const [description, setDescription] = useState(
    "Trying it God's way is a book about wanting to do things different where all else has failed. It's about giving hope to the hopeless, encouraging those who seek to find a different direction in life and making better choices. Teaching people about trusting God and in His word. Inspiring those who feel like nothing in their livesis going right. Even for those who want to make a difference in this world or in someone else's life. May they find peace in knowing that there is a better way, God's way."
  );

  //Popup Form
  const [popup, setPopup] = useState(false);

  const popupHandler = () => {
    setPopup(true);
  };
  const closePop = () => {
    setPopup(false);
  };

  return (
    <>
      <div className=" bg-[url('C:/Users/91828/Desktop/Book_Store_React/book_store/src/assets/Hero-bg.png')]  bg-cover bg-no-repeat bg-center dark:bg-black dark:text-white py-16 lg:py-24 ">
        <div className="grid grid-col-1 sm:grid-cols-2 container gap-5 lg:py-10">
          {/* columnm one */}
          <div
            data-aos="zoom-out"
            data-aos-duration="400"
            data-aos-once="true"
            className=" order-last sm:order-first  flex flex-col justify-center"
          >
            <h1 className="text-6xl mb-2 font-semibold">{title}</h1>
            <p className="text-right text-primaryColor font-semibold">
              {author}
            </p>
            <p className="my-2 line-clamp-2 "> {description}</p>
            <div className="flex justify-center sm:justify-start  ">
              <button onClick={popupHandler}>
                <NormButton title="Order Now" />
              </button>
            </div>
          </div>
          {popup && <Popup />}

          {/* columnm Two */}
          <div
            data-aos="zoom-out"
            data-aos-duration="600"
            data-aos-once="true"
            className="flex flex-col sm:gap-10 sm:flex-row "
          >
            {/* Main image */}
            <div>
              <img
                className=" w-[300px] h-[300px]  object-contain mx-auto  "
                src={imageId}
              />
            </div>
            {/* Other Images */}
            <div className="flex bg-gray-100 rounded-full  py-2 sm:p-4 gap-4  justify-center sm:gap-5 sm:flex-col">
              {ImageList.map((data) => {
                return (
                  <>
                    <div key={data.id}>
                      <img
                        onClick={() => {
                          setImageId(
                            data.id === 1
                              ? Book1
                              : data.id === 2
                              ? Book2
                              : Book3
                          );
                          setTitle(data.title);
                          setAuthor(data.Author);
                          setDescription(data.description);
                        }}
                        className="max-w-[70px] sm:max-w-[40px]  h-[100] object-contain inline-block hover:scale-110 duration-200"
                        src={data.img}
                      />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
