import React, { useRef, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PopupPractice = ({ closeIcon }) => {
  //Two way Binding
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  //useref
  const form = useRef();

  //Toastify
  const notify = () => toast("Message Sent Successfully");

  const submitHandler = (e) => {
    e.preventDefault();
    setName();
    setEmail();
    setAddress();

    //Emailjs form starts
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
      <main className="inset-0 w-full h-screen fixed flex justify-center items-center bg-black z-[9999] backdrop-blur-md bg-opacity-[0.0] ">
        <div className="bg-white p-4 px-6 rounded-lg">
          <div className="flex items-center justify-between my-2 mb-4">
            <h1 className="text-2xl font-semibold">Contact Form</h1>
            <IoMdCloseCircle
              className="text-2xl active:text-red-700 font-semibold"
              onClick={closeIcon}
            />
          </div>
          <form ref={form} onSubmit={submitHandler}>
            <div className="flex flex-col gap-4 ">
              <div>
                <input
                  name="user_name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                  type="text"
                  placeholder="Name"
                  className="p-2 px-4 h-9 font-semibold text-xl capitalize border-black border-2 rounded-2xl focus:bg-slate-400 focus:placeholder:text-white "
                />
              </div>
              <div>
                <input
                  name="user_email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                  value={email}
                  type="email"
                  placeholder="Email"
                  className="p-2 px-4 h-9 font-semibold text-xl border-black border-2 rounded-2xl focus:bg-slate-400 focus:placeholder:text-white  "
                />
              </div>
              <div>
                <input
                  name="user_address"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  required
                  value={address}
                  type="text"
                  placeholder="Address"
                  className="p-2 px-4 h-9 font-semibold text-xl capitalize border-black border-2 rounded-2xl focus:bg-slate-400 focus:placeholder:text-white "
                />
              </div>
              <div className="mx-auto">
                <input
                  onClick={notify}
                  type="submit"
                  value="Submit"
                  className=" flex text-white justify-center items-center h-9 gap-2 rounded-xl font-semibold py-1 px-5 hover:scale-105 transition duration-300  bg-primaryColor   "
                />
                <ToastContainer />
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default PopupPractice;
