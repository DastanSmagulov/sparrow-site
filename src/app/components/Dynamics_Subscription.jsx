"use client";

import Image from "next/image";
import Arrow from "@/assets/arrow";
import Dynamic from "@/assets/dynamic";
import BarChart from "./BarChart";
import Link from "next/link";
import Subscribers_Logo from "@/assets/subscribers_logo";
import Dynamic_Green from "@/assets/dynamic_green";
import Income_Green from "@/assets/income_green";

const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const Dynamics_Subscription = () => {
  return (
    <div className="rounded-lg bg-white py-7 inline-block ml-3 w-7/12 pr-5 h-[490px]">
      <div className="flex justify-between">
        <div className="flex">
          <div className="bg-[#B8F82F] border-black border-solid border-1 w-10 h-7 rounded-sm flex items-center mb-2 ml-8 mr-2">
            <div className="bg-[#112D48] rounded-full w-1 h-1 ml-1 mr-1"></div>
            <Image src={Subscribers_Logo} alt="dynamic" />
          </div>
          <div className="dropdown dropdown-bottom dropdown-end">
            <label className="flex text-xs font-normal" tabIndex={0}>
              <h3 className="font-semibold text-lg text-[#112D48]">
                Динамика подписок
              </h3>
              <Image src={Arrow} alt="arrow-down" className="ml-1 mt-1" />
            </label>
            <ul
              tabIndex={0}
              className="text-[#512040] dropdown-content menu p-2 shadow-[0px_4px_35px_0_rgba(0,0,0,0.1)] bg-white rounded-box w-52 z-50"
            >
              <Link className="flex justify-end" href="/account">
                Динамика торговли{" "}
                <Image
                  src={Dynamic_Green}
                  alt="subscribers"
                  width={20}
                  height={20}
                  className="ml-2"
                ></Image>
              </Link>
              <Link className="flex justify-end" href="/account_income">
                Динамика доходов
                <Image
                  src={Income_Green}
                  alt="subscribers"
                  width={20}
                  height={20}
                  className="ml-2"
                ></Image>
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex-none ml-96">
          <div className="dropdown dropdown-bottom dropdown-end">
            <label className="flex text-xs font-normal" tabIndex={0}>
              Month <Image src={Arrow} alt="arrow-down" className="ml-1" />
            </label>
            <ul
              tabIndex={0}
              className="text-[#512040] mt-2 dropdown-content menu p-2 shadow-[0px_4px_35px_0_rgba(0,0,0,0.1)] bg-white rounded-box w-52 z-50"
            >
              {months.map((month, index) => (
                <li key={index}>{month}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <h1 className="ml-10 font-light">
        <span className="text-[#B8F82F] text-xl font-semibold mr-1">135</span>
        подписок
      </h1>
      <h1 className="ml-10 font-light">
        <span className="text-[#19C20A] text-xl font-semibold mr-1">1135</span>
        наблюдателей
      </h1>
      <BarChart />
      <div className="w-20 h-5 bg-white absolute left-12 top-[770px]"></div>
    </div>
  );
};

export default Dynamics_Subscription;
