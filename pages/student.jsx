import Image from "next/image";
import React from "react";
import kusomImg from "../public/assets/projects/kusom.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const student = () => {
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
          <h2>Student Management System</h2>
          <h3>SpringBoot /MySQL / Angular / CSS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <div style={{ textAlign: "justify" }}>
            <p style={{ paddingBottom: "5px" }}>
              The Student Management System is a Java Spring Boot project that I
              developed with a MySQL backend. It serves as a simple yet
              effective solution for managing student records, monitoring
              attendance, and maintaining student details. As a part of my
              learning journey with Spring Boot, this project helped me gain a
              deeper understanding of the Model-View-Presenter (MVP)
              architecture and learn the basics of Angular.
            </p>{" "}
            <p style={{ paddingBottom: "5px" }}>
              The system provides basic CRUD (Create, Read, Update, Delete)
              functionality, allowing users to add, edit, and delete student
              information. Users can input details such as student names, IDs,
              contact information, and other relevant data. The system ensures
              that student records are accurately maintained and easily
              accessible.
            </p>{" "}
            <p style={{ paddingBottom: "5px" }}>
              One of the key features of the Student Management System is
              attendance monitoring. The system enables users to mark student
              attendance and keep track of attendance records over time. This
              feature provides valuable insights into student attendance
              patterns and helps in monitoring student participation.
            </p>{" "}
            <p style={{ paddingBottom: "5px" }}>
              Moreover, the system incorporates search functionality, allowing
              users to search for a particular student from a list of students.
              This feature facilitates quick and efficient retrieval of student
              information based on specific search criteria.
            </p>{" "}
            <p style={{ paddingBottom: "5px" }}>
              As part of the project, I also implemented the storage of student
              images in the MySQL database. Instead of storing the images in a
              separate folder, the system stores the images as binary large
              objects (BLOBs) in the database. This approach ensures better data
              organization and simplifies the management of student images.
            </p>{" "}
            <p style={{ paddingBottom: "5px" }}>
              Through this project, I gained hands-on experience in Java Spring
              Boot development, MySQL database integration, and basic Angular
              concepts. It allowed me to practice the implementation of CRUD
              operations, understand the MVP architecture, and explore various
              features provided by the Spring Boot framework.
            </p>{" "}
            <p style={{ paddingBottom: "5px" }}>
              Overall, the Student Management System developed using Java Spring
              Boot and MySQL provides a user-friendly interface for adding,
              editing, and deleting student records, monitoring attendance, and
              efficiently managing student details.
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
                <RiRadioButtonFill className="pr-1" /> SpringBoot
              </p>
              <p className="text-gray-600 py-2  flex items-center">
                <RiRadioButtonFill className="pr-1" /> MySQL
              </p>
              <p className="text-gray-600 py-2  flex items-center">
                <RiRadioButtonFill className="pr-1" /> Angular
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

export default student;
