import React from "react";
import ProjectItem from "../components/Project";

const projectList = [
  {
    name: "Canifa",
    link: "https://se2-canifa.herokuapp.com/",
    desc: "E-commercal website using ReactJS,SASS...",
    date: "1/2/2022",
  },
  {
    name: "myCV",
    link: "/",
    desc: "My CV with NextJS, Tailwinds, Vercel",
    date: "5/10/2022",
  },
];
const Project = () => {
  return (
    <div className="container-content ">
      <div className="flex flex-col text-primary-text">
        <div className="text-[40px]  leading-[48px] dark:text-[#ededed] text-black font-[550]">
          Project
        </div>
        <div className="text-sm  dark:text-[#5a462a]">
          Project was built with React, Next.js,NodeJS and TypeScript.
        </div>
        <div className="w-[150px] dark:text-[#5a462a] h-[1px] bg-primary-text my-5 opacity-6"></div>
        <div className="">
          {projectList.map((e, index) => {
            return (
              <ProjectItem
                key={index}
                name={e.name}
                link={e.link}
                desc={e.desc}
                date={e.date}
              ></ProjectItem>
            );
          })}
        </div>
        <div className="w-[50px] h-[1px] bg-primary-text mt-5  opacity-6"></div>
      </div>
    </div>
  );
};

export default Project;
