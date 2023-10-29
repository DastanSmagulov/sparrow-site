"use client";
import Image from "next/image";
import Arrow from "@/assets/arrow";
import userIcon from "@/assets/userIcon";
import Exit from "@/assets/exit";
import Link from "next/link";

const dataString = localStorage.getItem("personalData");

const dataJson = JSON.parse(dataString);

console.log(dataJson);

const UserInvest = () => {
  return (
    <div className="dropdown dropdown-bottom dropdown-end mt-5">
      <label
        tabIndex={0}
        className="text-black flex text-lg font-montserrat pl-5 pr-5"
      >
        <h2 className="mt-2 mr-2">{`${
          dataJson?.first_name
        } ${dataJson?.last_name?.charAt(0)}.`}</h2>
        <Image
          className="rounded-full"
          src={dataJson?.photo}
          width={50}
          height={50}
          alt="avatar"
        ></Image>
        <Image src={Arrow} alt="arrow-down" className="ml-2" />
      </label>
      <ul
        tabIndex={0}
        className="text-black mr-4 mt-2 rounded-md dropdown-content menu p-2 shadow-[0px_4px_35px_0_rgba(0,0,0,0.1)] bg-white w-56 z-50 py-2 px-2"
      >
        <Link className="flex mb-2 justify-end" href={"/dashboard"}>
          <li className="mr-1">Инвестиционный портфель</li>
          <Image src={userIcon} alt="userIcon" />
        </Link>
        <Link className="flex justify-end" href={"/"}>
          <li className="mr-1">Выход</li>
          <Image src={Exit} alt="exit" />
        </Link>
      </ul>
    </div>
  );
};

export default UserInvest;
