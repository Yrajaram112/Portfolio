import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    //     <div className="w-full h-screen text-center">
    //       <div className="max-w-[1240px] w-full h-full mx-auto flex justify-center items-center">
    //         <div>
    //           <p className="uppercase text-sm tracking-widest text-gray-600 ">
    // Software Engineer building scalable web applications and cloud systems
    //           </p>
    //           <h1 className="py-4 text-gray-700">
    //             Hey, I&apos;m <span className="text-[#5651ef]">Rajaram{" "}Yadav</span>{" "}
    //           </h1>
    //           <h1 className="py-2 text-gray-700">
    //             Full-<span className="text-[#5651ef]">Stack</span> Web{" "}
    //             <span className="text-[#5651ef]">Developer</span>
    //           </h1>
    //           <p className="py-4 text-gray-600 max-w-[70%] m-auto">
    //             I am a Full Stack Web Developer with expertise in building web
    //             applications from start to finish using Django and Next.js
    //             frameworks. I specialize in developing scalable and efficient web
    //             solutions that provide seamless user experience and solve complex
    //             business challenges.
    //           </p>
    //           <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
    //           <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300" onClick={() => window.open('https://www.linkedin.com/in/yadavrajaram/')}>
    //                     <FaLinkedinIn />
    //                   </div>
    //                   <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300" onClick={() => window.open('https://github.com/Yrajaram112')}>
    //                     <FaGithub />
    //                   </div>
    //                   <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300" onClick={() => window.open('mailto:rajaramyadavcse@gmail.com')}>
    //                     <AiOutlineMail />
    //                   </div>
    //                   <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300" onClick={() => window.open('https://www.rajaramyadav.com.np')}>
    //                     <BsFillPersonLinesFill />
    //                   </div>

    //           </div>
    //         </div>
    //       </div>
    //     </div>
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto flex justify-center items-center">
        <div>

          <p className="uppercase text-sm tracking-widest text-gray-600">
            Senior Software Engineer | Full-Stack | Java • Spring Boot • React • Cloud          </p>

          <h1 className="py-4 text-gray-700">
            Rajaram <span className="text-[#5651ef]">Yadav</span>
          </h1>

          <h2 className="py-2 text-gray-700 text-xl">
            Full-Stack Engineer Building Scalable Enterprise Applications
          </h2>

          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I am a Software Engineer with 6+ years of experience developing
            scalable full-stack applications using Java, Spring Boot, React,
            and cloud technologies. I specialize in designing microservices,
            building high-performance backend systems, and delivering modern
            web applications deployed on AWS and containerized infrastructure.
          </p>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">

            <div
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              onClick={() => window.open('https://www.linkedin.com/in/yadavrajaram/')}
            >
              <FaLinkedinIn />
            </div>

            <div
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              onClick={() => window.open('https://github.com/Yrajaram112')}
            >
              <FaGithub />
            </div>

            <div
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              onClick={() => window.open('mailto:rajaramyadavcse@gmail.com')}
            >
              <AiOutlineMail />
            </div>

            <div
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              onClick={() => window.open('https://www.rajaramyadav.com.np')}
            >
              <BsFillPersonLinesFill />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Main;
