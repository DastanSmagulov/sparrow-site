"use client";
import Person from "@/assets/person";
import Image from "next/image";
import { useState, useEffect } from "react";

const PersonalData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch example
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1/traider/${localStorage.getItem("id")}`,
          {
            method: "GET",
            headers: {
              // "Content-Type": "application/json",
              Authorization: "Token " + localStorage.getItem("key"),
            },
          }
        );
        setLoading(false);
        const result = await response.json();
        setData(result);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching data:", error);
      }
    };
    setLoading(true);

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="rounded-lg bg-white py-4 px-5 ml-3 w-1/4">
        <div className="flex">
          <div className="bg-[#B8F82F] border-black border-solid border-1 w-7 h-4 rounded-sm flex items-center mb-2">
            <div className="bg-[#112D48] rounded-full w-1 h-1 ml-1 mr-1"></div>
            <Image src={Person} alt="person" width={12} height={12} />
          </div>
          <h3 className="text-xs font-semibold ml-2">Персональные данные</h3>
        </div>
        <div className="flex justify-between">
          <div className="text-[#112D48] text-xs font-bold mt-2">
            <h3 className="mb-1">Фото</h3>
            <h3 className="mb-1">Логин</h3>
            <h3 className="mb-1">Имя</h3>
            <h3 className="mb-1">Фамилия</h3>
            <h3 className="mb-1">Дата рождения</h3>
            <h3 className="mb-1">Номер телефона</h3>
            <h3 className="mb-1">e-mail</h3>
            <h3 className="mb-1">Номер карты</h3>
          </div>
          <div className="text-[#112D48] text-xs font-light text-right">
            <h3 className="mb-1 mt-2">Loading...</h3>
            <h3 className="mb-1">Loading...</h3>
            <h3 className="mb-1">Loading...</h3>
            <h3 className="mb-1">Loading...</h3>
            <h3 className="mb-1">Loading...</h3>
            <h3 className="mb-1">Loading...</h3>
            <h3 className="mb-1">Loading...</h3>
            <h3 className="mb-1">Loading...</h3>
          </div>
        </div>
        {localStorage.setItem("personalData", JSON.stringify(data))}
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-white py-4 px-5 ml-3 w-1/4">
      <div className="flex">
        <div className="bg-[#B8F82F] border-black border-solid border-1 w-7 h-4 rounded-sm flex items-center mb-2">
          <div className="bg-[#112D48] rounded-full w-1 h-1 ml-1 mr-1"></div>
          <Image src={Person} alt="person" width={12} height={12} />
        </div>
        <h3 className="text-xs font-semibold ml-2">Персональные данные</h3>
      </div>
      <div className="flex justify-between">
        <div className="text-[#112D48] text-xs font-bold mt-2">
          <h3 className="mb-1">Фото</h3>
          <h3 className="mb-1">Логин</h3>
          <h3 className="mb-1">Имя</h3>
          <h3 className="mb-1">Фамилия</h3>
          <h3 className="mb-1">Дата рождения</h3>
          <h3 className="mb-1">Номер телефона</h3>
          <h3 className="mb-1">e-mail</h3>
          <h3 className="mb-1">Номер карты</h3>
        </div>
        <div className="text-[#112D48] text-xs font-light text-right">
          <Image
            className="float-right rounded-full"
            src={data?.photo}
            alt="user"
            width={25}
            height={25}
          ></Image>
          <h3 className="mb-1 mt-7">login</h3>
          <h3 className="mb-1">{data?.first_name}</h3>
          <h3 className="mb-1">{data?.last_name}</h3>
          <h3 className="mb-1">{data?.birth_date}</h3>
          <h3 className="mb-1">{data?.phone_number}</h3>
          <h3 className="mb-1">{data?.email}</h3>
          <h3 className="mb-1">{"**** " + data?.card_number?.substring(12)}</h3>
        </div>
      </div>
      {localStorage.setItem("personalData", JSON.stringify(data))}
    </div>
  );
};

export default PersonalData;
