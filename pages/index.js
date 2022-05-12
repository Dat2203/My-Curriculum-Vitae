import { BsCalendarDateFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { MdMail } from "react-icons/md";
import Aboutme from "../components/Aboutme";

const AboutList = [
  {
    title: "Education",
    description:
      "Currently, Falcuty Information Technology third-year student at  Hanoi University   GPA 3/4",
  },
  {
    title: "Objective",
    description:
      "Improve my sefl  to take more achivement in work, to become a execllent devloper and bring a lot value to customers.From that, i will contribute to development of Zinza Company.",
  },
  {
    title: "Describe myself",
    description:
      "Hard-working, studious and sociable person prove by some of my works in my portfolio. I am now looking for an opportunity to devote my skills, enthusiasm, and creativity.",
  },
  { title: "Work experience", description: "None" },
  {
    title: "Tech-Skills",
    description: "Java core, JavaScript, React, Nodejs, TypeScript,....",
  },

  {
    title: "Foreign Language",
    description:
      "Communicate by using English at an intermediate level, ability to read documents in English",
  },
];
export default function Home() {
  return (
    <div className="container-content ">
      <div className="flex flex-col text-primary-text">
        <div className="text-[40px]  leading-[48px] dark:text-[#ededed] text-black font-[550]">
          About
        </div>
        <div className="text-sm">Intership Web Developer</div>
        <div className="w-[100%] dark:text-[#5a462a] h-[1px] bg-primary-text my-5"></div>
        <div className="">
          {AboutList.map((e, index) => {
            return (
              <Aboutme
                index={index}
                title={e.title}
                description={e.description}
              ></Aboutme>
            );
          })}
          <div className="flex mt-6">
            <MdMail className=""></MdMail>
            <div className="ml-3 translate-y-[-4px]">
              thanhdat01.pnl@gmail.com
            </div>
          </div>
          <div className="flex">
            <HiLocationMarker className=""></HiLocationMarker>
            <div className="ml-3 translate-y-[-4px]">
              Thanh Tri, Hanoi, Vietnam
            </div>
          </div>
          <div className="flex ">
            <BsCalendarDateFill className=""></BsCalendarDateFill>
            <div className="ml-3 translate-y-[-4px]">22/3/2001</div>
          </div>
          <div className="flex">
            <BsFillTelephoneFill className=""></BsFillTelephoneFill>
            <div className="ml-3 translate-y-[-4px]">0902079390</div>
          </div>
        </div>
        <div className="w-[50px] h-[1px] bg-primary-text mt-5 mb-[200px]"></div>
      </div>
    </div>
  );
}
