import Image from "next/image";
import Link from "next/link";
import React from "react";
import profileImg from "../public/assets/rajaram-yadav-software-engineer.png";

const About = () => {
  return (
    <div id="about" className="w-full p-8 flex items-center">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About Rajaram Yadav
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Rajaram Yadav is a Senior Software Engineer with over 6 years of experience
            designing and building scalable full-stack applications and distributed
            systems. His work focuses on backend engineering using Java and Spring Boot,
            developing microservices architectures, and building modern web applications
            with React and Next.js.
          </p>

          <p className="py-2 text-gray-600">
            Rajaram has strong experience building high-performance systems for enterprise
            environments, implementing secure REST APIs, event-driven services using
            Kafka and RabbitMQ, and deploying cloud-native applications on AWS using
            Docker and Kubernetes.
          </p>
          <p className="py-2 text-gray-600">
            He holds a Master of Science in Computer Science from the University of
            Missouri-Kansas City and a Bachelor of Science in Computer Engineering from
            Vellore Institute of Technology. Rajaram is passionate about designing
            reliable backend systems, improving system performance, and building software
            that scales efficiently to meet real-world business demands.
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
            src={profileImg}
            alt="Rajaram Yadav Software Engineer"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
