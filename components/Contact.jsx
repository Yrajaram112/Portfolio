import Image from "next/image";
import Link from "next/link";
import React,{useState} from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronUp } from "react-icons/hi";
import contactImg from "../public/assets/contact.jpg";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setStatus(data.message);
    } catch (error) {
      console.error(error);
      setStatus('Error sending email');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  return (
    <div id ='contact' className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
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
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300" onClick={() => window.open('https://www.linkedin.com/in/yrajaram112/')}>
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300" onClick={() => window.open('https://github.com/Yrajaram112')}>
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300" onClick={() => window.open('mailto:yrajaram112@gmail.com')}>
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300" onClick={() => window.open('https://itsmerajaram.vercel.app/')}>
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
                      name="name" className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text" onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      name="phone" className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text" onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="email">
                    Email
                  </label>
                  <input
                   name="email"  className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email" onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    name="subject" className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text" onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    name="message" className="border-2 rounded-lg p-3 border-gray-300"
                    rows={10} onChange={handleChange}
                  ></textarea>
                </div>
                <button className="uppercase w-full p-4 mt-4 text-gray-100">
                  Send Message
                </button>
                <p>{status}</p>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
        <Link href='/'>
           
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronUp
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
