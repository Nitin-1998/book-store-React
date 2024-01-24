import React from "react";
import Hero from "../Components/Hero/Hero";
import Banner from "../Components/Banner/Banner";
import AppStore from "../Components/Banner/AppStore";
import BestBooks from "../Components/BestBooks/BestBooks";
import Testimonials from "../Components/Testimonials/Testimonials";
import BooksComp from "../Components/Blogs/BooksComp";

const Home = () => {
  return (
    <>
      <div>
        <div>
          <Hero />
          <BooksComp />

          <Banner />
          <AppStore />
          <BestBooks />
          <Testimonials />
        </div>
      </div>
    </>
  );
};

export default Home;
