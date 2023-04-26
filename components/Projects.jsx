import React from "react";
import propertyImg from "../public/assets/projects/property.jpg";
import kusomImg from "../public/assets/projects/kusom.jpg";
import ProjectItem from "./ProjectItem";
const Projects = () => {
  return (
    <div id='projects' className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="KUSOM Alumni"
            backgroundImg={kusomImg}
            projectUrl="/property"
          />
          <ProjectItem
            title="Loan Management System"
            backgroundImg={propertyImg}
            projectUrl="/property"
          />
          <ProjectItem
            title="Node JS Project"
            backgroundImg={propertyImg}
            projectUrl="/property"
          />
          <ProjectItem
            title="Loan App"
            backgroundImg={propertyImg}
            projectUrl="/property"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
