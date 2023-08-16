import Image from "next/image";
import Link from "next/link";
import React from "react";
import hotpotImg from "../public/assets/Hotpot.png";

const About = () => {
  return (
    <div id="about" className="w-full p-8 flex items-center">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I am an individual who completed a Bachelor&apos;s degree in Computer
            Science and Engineering from Vellore Institute of Technology. My
            passion for programming began during my high school years, and I
            further nurtured it by exploring various domains and undertaking
            minor projects during my college tenure.
          </p>
          <p className="py-2 text-gray-600">
            Motivated by my fascination with software development, I joined YCO
            Solutions Pvt Ltd to embark on my professional journey. Currently, I
            hold the position of a Software Development Engineer, where I have
            actively contributed to multiple projects. I continuously strive to
            enhance my skills and knowledge, aiming to become a proficient
            full-stack developer. I approach my work with dedication and
            enthusiasm, always seeking to deliver high-quality solutions and
            staying updated with the latest industry trends and technologies.
          </p>
         
          <p className="py-2 text-gray-600 underline cursor-pointer">
            <Link href="/#projects">
              {" "}
              Check Out some of my latest projects.
            </Link>
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src={hotpotImg}
            alt="/"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
