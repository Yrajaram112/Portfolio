import React from "react";
import propertyImg from "../public/assets/projects/property.jpg";
import loanManImg from "../public/assets/projects/loanMan.jpg";
import nepseImg from "../public/assets/projects/nepse.png";
import studentImg from "../public/assets/projects/studentImg.jpg";
import kusomImg from "../public/assets/projects/kusom.png";
import ProjectItem from "./ProjectItem";
const Projects = () => {
  return (
    <div id='projects' className="w-full">
      <div className="max-w-[1240px] mx-auto p-8">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="KUSOM Alumni"
            backgroundImg={kusomImg}
            projectUrl="/kusom"
            skill='Django'
          />
          <ProjectItem
            title="Nepse Analytics Project"
            backgroundImg={nepseImg}
            projectUrl="/nepse"
            skill='NextJS'
          />
          <ProjectItem
            title="Student Management System"
            backgroundImg={studentImg}
            projectUrl="/student"
            skill='SpringBoot'
          />
          <ProjectItem
            title="Loan Management System"
            backgroundImg={loanManImg}
            projectUrl="/loan"
            skill='Php'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
