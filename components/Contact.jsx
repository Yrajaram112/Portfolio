import Image from "next/image";
import Link from "next/link";
import React, { useState,useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronUp } from "react-icons/hi";
import contactImg from "../public/assets/contact.jpg";
import EmailSendModal from "./EmailSendModal";

const Contact = () => {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [loading, setloading] = useState(false);
  const [status, setStatus] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [isClose, setIsClose] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setloading(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setIsOpen(true);
        setIsClose(false);
        setStatus(data.message);
        setTimeout(() => {
          setIsOpen(false);
          setIsClose(true);
          setFormData(initialFormData);
        }, 3000);
      }
      else {
        setStatus("Mail sending failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Error sending email");
    }
    setloading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto p-8 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/*left*/}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={contactImg}
                  width={1000}
                  height={1000}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-4">Rajaram Yadav</h2>
                <p>Full-Stack Web Developer</p>
                <p className="py-4">
                  I am available for freelance or remote positions. Contact me
                  and let&apos;s discuss further.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With me</p>
                <div className="flex items-center justify-between py-4">
                  <div
                    className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                    onClick={() =>
                      window.open("https://www.linkedin.com/in/yrajaram112/")
                    }
                  >
                    <FaLinkedinIn />
                  </div>
                  <div
                    className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                    onClick={() =>
                      window.open("https://github.com/Yrajaram112")
                    }
                  >
                    <FaGithub />
                  </div>
                  <div
                    className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                    onClick={() => window.open("mailto:yrajaram112@gmail.com")}
                  >
                    <AiOutlineMail />
                  </div>
                  <div
                    className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                    onClick={() =>
                      window.open("https://itsmerajaram.vercel.app/")
                    }
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*right*/}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      name="name"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    name="email"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    name="subject"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
              
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button
                  disabled={loading}
                  className="uppercase w-full p-4 mt-4 text-gray-100"
                >
                  {loading ? (
                    <div class="text-center">
                      <div role="status">
                        <svg
                          aria-hidden="true"
                          class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span class="sr-only">Loading...</span>
                      </div>
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button>
                <EmailSendModal  isOpen={isOpen} onClose={isClose} status={status}/>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
