import Image from "next/image";
import Stats from "@/assets/statistics";

const Statistics = () => {
  return (
    <div className="rounded-lg bg-white py-4 px-5 w-1/4">
      <div className="flex">
        <div className="bg-[#B8F82F] border-black border-solid border-1 w-7 h-4 rounded-sm flex items-center mb-2">
          <div className="bg-[#112D48] rounded-full w-1 h-1 ml-1 mr-1"></div>
          <Image src={Stats} alt="person" width={12} height={12} />
        </div>
        <h3 className="text-xs font-semibold ml-2">Статистика</h3>
      </div>
      <div className="flex justify-between">
        <div className="text-[#112D48] text-xs font-bold w-full mt-2">
          <h3 className="mb-1">Количество подписчиков</h3>
          <h3 className="mb-1">Количество наблюдателей</h3>
          <h3 className="mb-1">Просмотры идей</h3>
          <h3 className="mb-1">Уровень вовлеченности</h3>
          <h3 className="mb-1">Количество сделок</h3>
          <h3 className="mb-1">Количество прибыльных сделок</h3>
          <h3 className="mb-1">Количество убыточных сделок</h3>
          <h3 className="mb-1">Активность торговли</h3>
        </div>
        <div className="text-[#112D48] text-xs font-light text-right mt-2">
          <h3 className="mb-1">135</h3>
          <h3 className="mb-1">44</h3>
          <h3 className="mb-1">98</h3>
          <h3 className="mb-1">455</h3>
          <h3 className="mb-1">123</h3>
          <h3 className="mb-1">52</h3>
          <h3 className="mb-1">2455</h3>
          <h3 className="mb-1">532</h3>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
