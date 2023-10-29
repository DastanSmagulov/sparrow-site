import Image from "next/image";
import YellowLine from "@/assets/yellowLine";
import gridYellow from "@/assets/gridYellow";
import Watchers_Logo from "@/assets/watchers_logo";

const Watchers = () => {
  return (
    <div className="rounded-lg bg-[#116ED9] border-1 border-solid border-[#F8E23C] text-white w-1/4 mr-3">
      <div className="flex ml-4 mt-5">
        <div className="bg-[#F8E23C] border-black border-solid border-1 w-7 h-4 rounded-sm flex items-center mb-5">
          <div className="bg-[#112D48] rounded-full w-1 h-1 ml-1 mr-1"></div>
          <Image src={Watchers_Logo} alt="person" width={15} height={15} />
        </div>
        <h3 className="text-xs font-semibold ml-2">Количество наблюдателей</h3>
      </div>
      <div>
        <h2 className="text-5xl font-medium ml-4">
          1120<span className="text-xs font-semibold">человек</span>
        </h2>
      </div>
      <div className="relative top-px">
        <Image
          src={YellowLine}
          alt="greenLine"
          width={500}
          className="absolute"
        />
        <Image
          src={gridYellow}
          alt="grid"
          width={500}
          className="absolute stroke-[#F8E23C]"
        />
      </div>
    </div>
  );
};

export default Watchers;
