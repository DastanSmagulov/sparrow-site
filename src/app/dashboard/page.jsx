import Image from "next/image";
import UserInvest from "../components/UserInvest";
import Logo from "../../assets/logo";
import ActivePositions from "../components/ActivePositions";
import Watchlist from "../components/Watchlist";
import PieChart from "../components/PieChart";
import PieChartActive from "../components/PieChartActive";

export default function Dashboard() {
  return (
    <div className="bg-[#ECE6E1] text-[#112D48] font-montserrat pb-32 px-3">
      <div className="flex justify-between mb-5">
        <div className="flex pt-7">
          <Image src={Logo} alt="logo" width={45} height={25} />
          <h1 className="text-2xl font-bold text-[#112D48] ml-2 mt-1">
            Sparrow<span className="text-[#19C20A]">AI</span>
          </h1>
        </div>
        <UserInvest />
      </div>
      <ActivePositions />
      <div className="flex gap-3 mt-3">
        <PieChart />
        <PieChartActive />
        <Watchlist />
      </div>
    </div>
  );
}
