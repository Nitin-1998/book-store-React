import React, { useEffect, useState } from "react";

import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";



const DarkMode = () => {
     // toggle in icons of light & Dark
  const [toggle, setToggle] = useState(false);


  //Dark & Light Mode
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const myElement = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      myElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      myElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setToggle(!toggle);
    } else {
      setTheme("light");
      setToggle(!toggle);
    }
  };
  return (
    <>
        {/* Dark button */}
        <div className=" ">
              {toggle ? (
                <MdLightMode
                  onClick={changeTheme}
                  className="dark:text-white   cursor-pointer "
                  size={32}
                />
              ) : (
                <MdDarkMode
                  onClick={changeTheme}
                  className="dark:text-white   z-[10] cursor-pointer "
                  size={32}
                />
              )}
            </div>
    </>
  )
}

export default DarkMode