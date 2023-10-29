import Image from "next/image";
import PersonalData from "../components/PersonalData";
import Statistics from "../components/Statistics";
import Subscribers from "../components/Subscribers";
import Logo from "../../assets/logo";
import Watchers from "../components/Watchers";
import History from "../components/History";
import Arrow from "@/assets/arrow";
import UserImage from "../components/UserImage";
import Dynamics_Income from "../components/Dynamics_Income";

export default function Income() {
  return (
    <div className="bg-[#ECE6E1] text-[#112D48] font-montserrat pb-32">
      <div className="flex justify-between mb-5">
        <div className="flex pt-7 pl-6">
          <Image src={Logo} alt="logo" width={45} height={25} />
          <h1 className="text-2xl font-bold text-[#112D48] ml-2 mt-1">
            Sparrow<span className="text-[#19C20A]">AI</span>
          </h1>
        </div>
        <UserImage />
      </div>
      <div className="flex gap-3">
        <PersonalData />
        <Statistics />
        <Subscribers />
        <Watchers />
      </div>
      <div className="flex gap-3 mt-3">
        <Dynamics_Income />
        <History />
      </div>
    </div>
  );
}
