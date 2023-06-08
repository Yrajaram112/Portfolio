import Image from "next/image";
import React from "react";
import nepseImg from "../public/assets/projects/nepse.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const nepse = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh]  relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          fill
          style={{ objectFit: "cover" }}
          src={nepseImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-1">
          <h2>Nepse Analytics Project</h2>
          <h3>NextJS / MySQL / Java SpringBoot / Material UI</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <div style={{ textAlign: "justify" }}>
            <p style={{ paddingBottom: "5px" }}>
              The Nepse Analytics Project is a robust and innovative web
              application developed using React, a growing framework known for
              its advantages in server-side rendering. This choice of technology
              brings several benefits to the project, including shorter load
              times, improved SEO capabilities, a faster development process,
              and enhanced image optimization.
            </p>
            <p style={{ paddingBottom: "5px" }}>
              The primary goal of the Nepse Analytics Project is to provide
              users and traders with comprehensive live market data and
              analysis. Through this platform, users can access real-time
              information on stock market trends, price movements, and trading
              volumes. The application incorporates advanced technical analysis
              tools that allow users to make informed investment decisions based
              on indicators, chart patterns, and other relevant data.
            </p>
            <p style={{ paddingBottom: "5px" }}>
              The project also includes features that provide detailed
              predictions and insights into market trends. These predictions
              utilize various algorithms and statistical models to forecast
              stock price movements, helping users identify potential investment
              opportunities and risks.
            </p>
            <p style={{ paddingBottom: "5px" }}>
              In terms of architecture, the backend of the Nepse Analytics
              Project is developed using Spring Boot, a powerful Java-based
              framework. Spring Boot enables efficient and reliable data
              processing, integration with external APIs, and seamless
              communication with the frontend. The project utilizes MySQL as the
              database management system, ensuring robust data storage and
              retrieval capabilities.
            </p>
            <p style={{ paddingBottom: "5px" }}>
              To enhance the user experience, the project incorporates
              Material-UI, a popular React component library known for its
              modern and visually appealing design elements. Material-UI
              provides a wide range of pre-designed UI components and styles
              that improve the aesthetics and usability of the application.
            </p>
            <p style={{ paddingBottom: "5px" }}>
              Overall, the Nepse Analytics Project combines the power of React
              for server-side rendering, Spring Boot for backend development,
              and MySQL for data management. With its live market data, detailed
              analysis, technical predictions, and user-friendly interface, the
              project aims to empower users and traders with the information
              they need to make intelligent investment decisions in the Nepalese
              stock market.
            </p>
          </div>
          <button className="px-8 py-2 mt-4 mr-8">
            <a href="#">Demo</a>
          </button>
          <button className="px-8 py-2 mt-4">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="font-semibold text-center py-4">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NextJS
              </p>
              <p className="text-gray-600 py-2  flex items-center">
                <RiRadioButtonFill className="pr-1" /> MySQL
              </p>
              <p className="text-gray-600 py-2  flex items-center">
                <RiRadioButtonFill className="pr-1" /> SpringBoot
              </p>
              <p className="text-gray-600 py-2  flex items-center">
                <RiRadioButtonFill className="pr-1" /> Material UI
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default nepse;
