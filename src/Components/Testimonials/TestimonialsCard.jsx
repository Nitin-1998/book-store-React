import React from "react";
import img1 from "../../assets/testimonial/image1.jpg";
import img2 from "../../assets/testimonial/image2.jpg";
import img3 from "../../assets/testimonial/image3.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: img1,
  },
  {
    id: 1,
    name: "Satya Narayan",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: img2,
  },
  {
    id: 1,
    name: "Sachin Tendulkar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: img3,
  },
];

const TestimonialsCard = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        // slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
          {
            breakpoint: 10000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <>
      <div className="grid grid-cols-1 max-w-[600px] mx-auto   gap-10 ">
        <Slider {...settings}>
          {testimonialData.map((data) => {
            return (
              <>
                <div className=" relative bg-[#e7f2f9] dark:bg-[#1f2937]  rounded-xl mx-4 p-4" key={data.id}>
                  <img className="h-32 w-32 rounded-full" src={data.img} />
                  <p className="pt-6 text-gray-400 pb-2">{data.text}</p>
                  <h1 className="text-2xl font-bold">{data.name}</h1>
                  <span className=" absolute font-serif top-8 right-4 font-bold text-gray-500 text-8xl">
                    ,,
                  </span>
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default TestimonialsCard;
