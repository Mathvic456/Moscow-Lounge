"use client"; // This directive marks this file as a Client Component


import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { MdPhoneAndroid } from "react-icons/md";

export const ContactComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSend = () => {
    if (name && email && subject && message) {
      setShowModal(true);
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div className="w-full flex flex-col xl:flex-row pt-20">
      <div className="flex flex-col w-full xl:w-1/2 justify-around">
        <div className="flex flex-row items-center my-4">
          <div className="h-12 w-12 rounded-full mr-5 bg-[#cda45e] md:bg-[#cda45e] flex flex-row items-center justify-center">
            <IoLocationOutline color="white" size={25}></IoLocationOutline>
          </div>
          <div>
            <h2 className="text-white w-fit block">Location:</h2>
            <span className="text-white block">
              A108 Adam Street, New York, NY 535022
            </span>
          </div>
        </div>
        <div className="flex flex-row items-center my-4">
          <div className="h-12 w-12 rounded-full mr-5 bg-[#cda45e] md:bg-[#cda45e] flex flex-row items-center justify-center">
            <FaRegClock color="white" size={25}></FaRegClock>
          </div>
          <div>
            <h2 className="text-white w-fit block">Open hours:</h2>
            <span className="text-white block">Mondays - Saturdays</span>
            <span className="text-white block">11:00am - 23:00pm</span>
          </div>
        </div>
        <div className="flex flex-row items-center my-4">
          <div className="h-12 w-12 rounded-full mr-5 bg-[#cda45e] md:bg-[#cda45e] flex flex-row items-center justify-center">
            <IoMailOutline color="white" size={25}></IoMailOutline>
          </div>
          <div>
            <h2 className="text-white w-fit block">Mail:</h2>
            <span className="text-white block">info@example.com</span>
          </div>
        </div>
        <div className="flex flex-row items-center my-4">
          <div className="h-12 w-12 rounded-full mr-5 bg-[#cda45e] md:bg-[#cda45e] flex flex-row items-center justify-center">
            <MdPhoneAndroid color="white" size={25}></MdPhoneAndroid>
          </div>
          <div>
            <h2 className="text-white w-fit block">Location:</h2>
            <span className="text-white block">
              A108 Adam Street, New York, NY 535022
            </span>
          </div>
        </div>
      </div>
      <form
        className="w-full xl:w-1/2 mt-5"
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
      >
        <div className="w-full flex flex-row">
          <input
            placeholder="Your name"
            className="w-1/2 text-white bg-transparent border-[1px] border-gray-400 focus:border-[#cda45e] mr-5 py-2 px-3 focus:outline-none rounded-lg"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Your email"
            className="w-1/2 text-white bg-transparent border-[1px] border-gray-400 focus:border-[#cda45e] py-2 px-3 focus:outline-none rounded-lg"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-full flex flex-row mt-5">
          <input
            placeholder="Subject"
            className="w-full text-white bg-transparent border-[1px] border-gray-400 focus:border-[#cda45e] py-2 px-3 focus:outline-none rounded-lg"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <textarea
          placeholder="Message"
          className="w-full bg-transparent text-white mt-5 border-[1px] border-gray-400 focus:border-[#cda45e] py-2 px-3 focus:outline-none rounded-lg"
          name="message"
          id=""
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <div className="w-full flex flex-row items-center my-2 justify-center mt-10">
          <button
            type="submit"
            className={`text-white rounded-full bg-[#cda45e] w-fit py-2 px-6`}
          >
            Send message
          </button>
        </div>
      </form>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg">
            <h2 className="text-xl mb-4">Message sent!</h2>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
