import GreenLine from "@/assets/greenLine";
import Grid from "@/assets/grid";
import Subscribers_Logo from "@/assets/subscribers_logo";
import Image from "next/image";

const Subscribers = () => {
  return (
    <div className="rounded-lg bg-[#116ED9] border-1 border-solid border-[#B8F82F] text-white w-1/4">
      <div className="flex ml-4 mt-5">
        <div className="bg-[#B8F82F] border-black border-solid border-1 w-7 h-4 rounded-sm flex items-center mb-5">
          <div className="bg-[#112D48] rounded-full w-1 h-1 ml-1 mr-1"></div>
          <Image src={Subscribers_Logo} alt="person" width={15} height={15} />
        </div>
        <h3 className="text-xs font-semibold ml-2">
          Количество активных подписок
        </h3>
      </div>
      <div>
        <h2 className="text-5xl font-medium ml-4">
          135<span className="text-xs font-semibold">человек</span>
        </h2>
      </div>
      <div className="relative top-px">
        <Image
          src={GreenLine}
          alt="greenLine"
          width={500}
          className="absolute"
        />
        <Image src={Grid} alt="grid" width={500} className="absolute" />
      </div>
    </div>
  );
};

export default Subscribers;
