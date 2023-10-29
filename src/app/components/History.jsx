"use client";
import Image from "next/image";
import History_Icon from "@/assets/history";
import "../../app/globals.css";
import { useState, useEffect } from "react";

const History = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch example
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1/traider/${localStorage.getItem("id")}/history/`,
          {
            method: "GET",
            headers: {
              // "Content-Type": "application/json",
              Authorization: "Token " + localStorage.getItem("key"),
            },
          }
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="rounded-lg bg-white py-7 px-8 mr-3 w-3/6">
      <div className="flex">
        <div className="bg-[#B8F82F] border-black border-solid border-1 w-10 h-7 rounded-sm flex items-center mb-2">
          <div className="bg-[#112D48] rounded-full w-1 h-1 ml-1 mr-1"></div>
          <Image src={History_Icon} alt="dynamic" />
        </div>
        <h3 className="font-semibold ml-2 text-lg">История</h3>
      </div>
      <div className="overflow-y-auto max-h-96 overflow-hidden mt-3">
        <table className="table-xs border-spacing-0	border-collapse">
          <thead>
            <tr className="font-semibold text-xs text-center">
              <td className="mr-2">Тикер</td>
              <td className="w-20">Дата открытия</td>
              <td className="w-20">Цена открытия</td>
              <td className="w-20">Дата закрытия</td>
              <td className="w-20">Цена закрытия</td>
              <td className="w-30">Результат</td>
              <td>%</td>
            </tr>
          </thead>
          <tbody className="text-sm font-normal text-center">
            {data?.map((histor) => (
              <tr key={histor.id}>
                <td className="pr-2">{histor.ticker}</td>
                <td>
                  {new Date(histor.open_date)
                    .toLocaleDateString("en-GB")
                    .replace(/\//g, ".")}
                </td>
                <td>{parseFloat(histor.open_price.toFixed(2))}</td>
                <td>
                  {new Date(histor.close_date)
                    .toLocaleDateString("en-GB")
                    .replace(/\//g, ".")}
                </td>
                <td>{parseFloat(histor.close_price.toFixed(2))}</td>{" "}
                <td
                  className={
                    histor.result < 0 ? "text-[#FB3F73]" : "text-[#19C20A]"
                  }
                >
                  {parseFloat(histor.result.toFixed(2))}
                </td>
                <td
                  className={
                    histor.percent < 0 ? "text-[#FB3F73]" : "text-[#19C20A]"
                  }
                >
                  {parseFloat(histor.percent.toFixed(2))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
