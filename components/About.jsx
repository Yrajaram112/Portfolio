import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div id='about' className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">// It's the funny Fella in your Group</p>
          <p className="py-2 text-gray-600">
            I have completed my Bachelor's in Computer Science and Engineering
            through Vellopre Institute of Technology. I discovered my love for
            Programming during my high school. I started exploring the domains and started working on minor college Projects.
          </p>
          <p className="py-2 text-gray-600">Fascinated with Development, I joined the YCO solutions and started my profession journey there.</p>
          <p className="py-2 text-gray-600 underline cursor-pointer"><Link href='/#projects'> Check Out some of my latest projects.</Link></p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image className="rounded-xl" src="/../public/assets/Hotpot.png" alt="/" width={1000} height={1000}/>
        </div>
      </div>
    </div>
  );
};

export default About;
