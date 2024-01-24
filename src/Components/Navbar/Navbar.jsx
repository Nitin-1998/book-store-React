import Logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import DarkMode from "./DarkMode";
import { IoMdArrowDropdown } from "react-icons/io";
import Button from "../Button/Button";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import Popup from "../Popup/Popup";
import PopupPractice from "../Popup/PopupPractice";

const dropLinks = [
  {
    name: "Tranding Books",
    Link: "#",
  },
  {
    name: "Best Selling",
    Link: "#",
  },
  {
    name: "Authors",
    Link: "#",
  },
];

const Navbar = () => {
  // menu icon toggle
  const [icon, setIcon] = useState(false);

  const iconToggler = () => {
    setIcon(!icon);
  };

  //Popup Practice start
  const [showParcPop, setShowParcPop] = useState(false);
  const ParcPopHandler = () => {
    setShowParcPop(true);
  };
  const closeIcon = () => {
    setShowParcPop(false);
  };
  //Popup Practice Ends

  //Pop form
  const [showPopUp, setShowPopUp] = useState(false);

  const popHandler = () => {
    setShowPopUp(true);
    setIcon(false);
  };

  const closeForm = () => {
    setShowPopUp(false);
  };
  return (
    <>
      <div className="  top-0 right-0 w-full relative dark:bg-[#111827]  shadow-md py-3  ">
        <div className="container">
          {/* Navbar Starts */}
          <div className="flex justify-between items-center   ">
            {/* Logo */}
            <div>
              <Link className="flex justify-center items-center" to="/">
                <img className="h-12" src={Logo} />
                <h1 className="md:text-4xl text-2xl font-bold dark:text-white transition duration-200 ">
                  Books
                </h1>
              </Link>
            </div>

            {/* Dark button  */}
            <div className="flex justify-center gap-4">
              <div>
                <DarkMode />
              </div>

              {/* NavLinks */}
              <div className="dark:text-white transition duration-200  hidden md:block ">
                <ul className="flex justify-center gap-10 font-semibold items-center ">
                  <li>
                    <NavLink className="hover:text-primaryColor" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="hover:text-primaryColor"
                      to="/bestseller"
                    >
                      Best Seller
                    </NavLink>
                  </li>

                  <li className=" relative group cursor-pointer">
                    <a href="#">
                      <div className="flex items-center">
                        <span>Quick Links</span>
                        <span>
                          <IoMdArrowDropdown
                            className=" group-hover:rotate-180 transition duration-200 "
                            size={28}
                          />
                        </span>
                      </div>
                    </a>

                    {/* Dropdown Links */}
                    <div className="absolute hidden group-hover:block bg-white shadow-md p-2 z-[10]  ">
                      <ul className=" dark:text-black w-[130px] ">
                        {dropLinks.map((data) => {
                          return (
                            <>
                              <li key={data.name} className="my-1  ">
                                <NavLink
                                  className=" block hover:bg-primaryColor/20 rounded-lg py-1 px-2 "
                                  to="/bestseller"
                                >
                                  {data.name}
                                </NavLink>
                              </li>
                            </>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              {/* Button */}

              <div>
                <button onClick={popHandler} className="dark:text-white">
                  <Button title="Order" />
                </button>
              </div>

              {/* Practice Pop */}
              {showParcPop && <PopupPractice closeIcon={closeIcon} />}

              {/* Popup */}
              {showPopUp && <Popup closeForm={closeForm} />}

              {/* Mobile Menu Icon*/}
              <div className="flex items-center md:hidden ">
                {icon ? (
                  <CiMenuBurger
                    onClick={iconToggler}
                    className="dark:text-white text-3xl "
                  />
                ) : (
                  <CiMenuFries
                    onClick={iconToggler}
                    className="dark:text-white text-3xl   "
                  />
                )}
              </div>
            </div>
          </div>

          {/* Mobile Menu Icon*/}
          <div
            className={`${
              icon ? "left:0" : "left-full"
            } md:hidden flex flex-col z-10 fixed bg-white shadow-xl  rounded-r-2xl top-0  left-0 bottom-0 font-semibold text-2xl text-start px-8 pt-8 pb-4  gap-8 w-[70%] h-screen transition-all duration-300 dark:bg-[#112937] dark:text-white `}
          >
            <div>
              <div className="flex  text-gray-500 gap-3 items-center">
                <div className=" ">
                  <FaUserCircle size={56} />
                </div>
                <div className="text-xl">
                  <h1>Hello User</h1>
                  <p>Welcome User</p>
                </div>
              </div>

              <div className="py-10">
                <ul className=" flex flex-col text-xl gap-6">
                  <li>
                    <NavLink
                      activeClassName="active"
                      onClick={() => setIcon(false)}
                      className="hover:text-primaryColor"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      activeClassName="active"
                      onClick={() => setIcon(false)}
                      className="hover:text-primaryColor"
                      to="/bestseller"
                    >
                      Best Seller
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      activeClassName="active"
                      onClick={() => setIcon(false)}
                      className="hover:text-primaryColor"
                      to="/bestseller"
                    >
                      Tranding Books
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
