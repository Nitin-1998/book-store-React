import React from "react";
import playStore from "../../assets/play_store.png";
import appStore from "../../assets/app_store.png";

const AppStore = () => {
  return (
    <>
      <div className="h-[200px] text-white dark:text-white bg-no-repeat bg-cover bg-center bg-[url('C:/Users/91828/Desktop/Book_Store_React/book_store/src/assets/banner-bg.png')] flex justify-center">
        <div className="flex flex-col justify-center items-center pt-10">
          <h1 className="text-4xl text-center font-semibold">
            Read Books at your fingertips
          </h1>
          <div data-aos="fade-up" className="flex py-4">
            <img className="h-14" src={playStore} />
            <img className="h-14" src={appStore} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
