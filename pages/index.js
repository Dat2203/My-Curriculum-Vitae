import { BsCalendarDateFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { MdMail } from "react-icons/md";

export default function Home() {
  return (
    <div className="container-content ">
      <div className="flex flex-col text-primary-text">
        <div className="text-[40px]  leading-[48px] dark:text-[#ededed] text-black font-[550]">
          About
        </div>
        <div className="text-sm">Intership Web Developer</div>
        <div className="w-[150px] dark:text-[#5a462a] h-[1px] bg-primary-text my-5"></div>
        <div className="">
          <div className="flex">
            <div className="text-[16px] font-bold">Skills : </div> Java Core,
            JavaScript,Mysql/Mongodb,....
          </div>
          <div className="flex">
            <div className="text-[16px] font-bold">Foreign Language: </div>
            Communicate by using English at an intermediate level
          </div>
          <div className="flex mt-3">
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
        <div className="w-[50px] h-[1px] bg-primary-text mt-5"></div>
      </div>
    </div>
  );
}
