import React, { useRef, useState } from "react";
import { GiCancel } from "react-icons/gi";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Popup = ({ closeForm }) => {
  // Form Validation Two Way binding
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  // For form send
  const form = useRef();

  // for tostify Mesaage
  const notify = () => toast("Message Sent Successfully!");

  const sendEmail = (e) => {
    e.preventDefault();
    setName();
    setEmail();
    setAddress();

    emailjs
      .sendForm(
        "service_0v63tqj",
        "template_vqxj6vj",
        form.current,
        "-G1Z3t43KDx-b2jWx"
      )
      .then(
        (result) => {
          console.log(result.text);
          
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };

  return (
    <>
      <div className="dark:text-white fixed flex justify-center items-center inset-0 h-screen z-[9999] bg-black backdrop-blur-md bg-opacity-[0.9] ">
        <div className=" ">
          <div className="container">
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex  flex-col rounded justify-center gap-4 min-w-[300px] p-4  bg-[#111827] z-[99999]">
                <div className="flex justify-between text-2xl font-semibold">
                  <h1 className="text-white">Order Your Book</h1>
                  <GiCancel
                    className=" text-white active:text-red-500"
                    onClick={closeForm}
                  />{" "}
                  {/* </button> */}
                </div>
                <div>
                  <input
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className="w-full required: h-9 px-2  dark:bg-[#1f2937] capitalize font-semibold rounded-xl "
                    type="text"
                    placeholder="Name"
                    name="user_name"
                    required
                  />
                </div>

                <div>
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value);
                      // console.warn(e.target.value)
                    }}
                    value={email}
                    className="w-full h-9 px-2  dark:bg-[#1f2937] font-semibold rounded-xl "
                    type="email"
                    placeholder="Email"
                    name="user_email"
                    required
                  />
                </div>
                <div>
                  <input
                    onChange={(e) => {
                      setAddress(e.target.value);
                      // console.warn(e.target.value)
                    }}
                    value={address}
                    className="w-full h-9 px-2  dark:bg-[#1f2937] capitalize font-semibold rounded-xl "
                    type="text"
                    placeholder="Address"
                    name="user_address"
                    required
                  />
                </div>

                  <button
                    onClick={notify}
                    type="submit"
                    className=" flex text-white justify-center items-center gap-2 rounded-xl font-semibold py-1 px-3 hover:scale-105 transition duration-300  bg-primaryColor  "
                  >
                  Order Now
                </button>
                <ToastContainer />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
