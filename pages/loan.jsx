import Image from "next/image";
import React from "react";
import kusomImg from "../public/assets/projects/kusom.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const loan = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh]  relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          fill
          style={{ objectFit: "cover" }}
          src={kusomImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-1">
          <h2>Loan Management System</h2>
          <h3>Php /HTML / CSS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <div style={{ textAlign: "justify" }}>
            <p style={{ paddingBottom: "5px" }}>
              The Loan Management System is a web-based application that I
              developed using PHP, HTML, and CSS. Its purpose is to provide a
              reliable and efficient solution for managing loan records,
              interest percentages, reminders, and other related features.
            </p>{" "}
            <p style={{ paddingBottom: "5px" }}>
              The system allows users to input and store loan information,
              including borrower details, loan amount, interest rates, and
              repayment terms. This data is securely stored in a database,
              ensuring easy access and retrieval when needed.
            </p>{" "}
            <p style={{ paddingBottom: "5px" }}>
              One of the key features of the Loan Management System is the
              ability to calculate and track interest percentages. The system
              automatically calculates interest amounts based on predefined
              formulas or user-defined parameters. This enables users to monitor
              and manage loan interest accruals accurately.
            </p>{" "}
            <p style={{ paddingBottom: "5px" }}>
              Additionally, the system incorporates a reminder functionality to
              ensure timely loan repayments. Users can set up reminders for
              upcoming payment due dates, ensuring borrowers are notified
              promptly. This feature helps in reducing the chances of late or
              missed payments, improving overall loan management efficiency.
            </p>{" "}
            <p style={{ paddingBottom: "5px" }}>
              The user interface of the Loan Management System is designed using
              HTML and CSS to provide an intuitive and user-friendly experience.
              The system includes forms for data input, tables for displaying
              loan records, and interactive elements for easy navigation and
              interaction.
            </p>{" "}
            <p style={{ paddingBottom: "5px" }}>
              The system can be further enhanced with additional features such
              as reporting functionalities, document management, and user
              authentication for improved security and access control.
            </p>{" "}
            <p style={{ paddingBottom: "5px" }}>
              Overall, the Loan Management System that I developed using PHP,
              HTML, and CSS is a comprehensive solution for effectively managing
              loan records, calculating interest percentages, setting up
              reminders, and facilitating efficient loan management processes.
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
                <RiRadioButtonFill className="pr-1" /> Php
              </p>
              <p className="text-gray-600 py-2  flex items-center">
                <RiRadioButtonFill className="pr-1" /> Ajax
              </p>

              <p className="text-gray-600 py-2  flex items-center">
                <RiRadioButtonFill className="pr-1" /> HTML
              </p>
              <p className="text-gray-600 py-2  flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
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

export default loan;
