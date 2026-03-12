import Image from "next/image";
import React from "react";
import htmlImg from "../public/assets/skills/html-rajaram-yadav.png";
import cssImg from "../public/assets/skills/css-rajaram-yadav.png";
import pythonImg from "../public/assets/skills/python-rajaram-yadav.png";
import djangoImg from "../public/assets/skills/django-rajaram-yadav.png";
import sqlImg from "../public/assets/skills/sql-rajaram-yadav.png";
import githubImg from "../public/assets/skills/github-rajaram-yadav.png";
import nextImg from "../public/assets/skills/nextjs-rajaram-yadav.png";
import javascriptImg from "../public/assets/skills/html-rajaram-yadav.png";
import nginxImg from "../public/assets/skills/nginx-rajaram-yadav.jpg";
import dockerImg from "../public/assets/skills/docker-rajaram-yadav.png";
import reactImg from "../public/assets/skills/react-rajaram-yadav.png";
import deploymentImg from "../public/assets/skills/deployment-rajaram-yadav.png";


const Skills = () => {
  return (
    <div id='skills' className="w-full p-8">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={htmlImg}
                  width="64"
                  height="64"
                  alt="HTML skill icon for Rajaram Yadav's portfolio"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                   src={cssImg}
                  width="64"
                  height="64"
                  alt="CSS skill icon for Rajaram Yadav's portfolio"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={javascriptImg}
                  width="64"
                  height="64"
                  alt="JavaScript skill icon for Rajaram Yadav's portfolio"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                   src={nextImg}
                  width="64"
                  height="64"
                  alt="Next.js skill icon for Rajaram Yadav's portfolio"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NextJs</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={djangoImg}
                  width="64"
                  height="64"
                  alt="Django skill icon for Rajaram Yadav's portfolio"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Django</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                   src={pythonImg}
                  width="64"
                  height="64"
                  alt="Python skill icon for Rajaram Yadav's portfolio"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Python</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                   src={githubImg}
                  width="64"
                  height="64"
                  alt="Github skill icon for Rajaram Yadav's portfolio"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                   src={sqlImg}
                  width="64"
                  height="64"
                  alt="SQL skill icon for Rajaram Yadav's portfolio"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>SQL</h3>
              </div>
            </div> 
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                   src={reactImg}
                  width="64"
                  height="64"
                  alt="React skill icon for Rajaram Yadav's portfolio"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div> 
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                   src={nginxImg}
                  width="64"
                  height="64"
                  alt="Nginx skill icon for Rajaram Yadav's portfolio"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Nginx</h3>
              </div>
            </div> 
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                   src={deploymentImg}
                  width="64"
                  height="64"
                  alt="Deployment skill icon for Rajaram Yadav's portfolio"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Deployment</h3>
              </div>
            </div> 
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                   src={dockerImg}
                  width="64"
                  height="64"
                  alt="Docker skill icon for Rajaram Yadav's portfolio"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Docker</h3>
              </div>
            </div> 
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
