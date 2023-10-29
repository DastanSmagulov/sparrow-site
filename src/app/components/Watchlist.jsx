"use client";
import Image from "next/image";
import History_Icon from "@/assets/history";
import "../../app/globals.css";
import Plus from "@/assets/plus";
import Cross from "@/assets/cross";
import Watchlist_Icon from "@/assets/watchlist";
import { useEffect, useState } from "react";

const Watchlist = () => {
  const [data, setData] = useState(null);
  const [ticker, setTicker] = useState("");
  const [deleteId, setDeleteId] = useState(null);
  const [loading, setLoading] = useState(true);

  const addWatchList = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch("http://127.0.0.1/traider/watch-list/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token " + localStorage.getItem("key"),
        },
        body: JSON.stringify({
          ticker,
        }),
      });
      fetchWatchList();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const closeWatchList = async (id_watchList) => {
    try {
      const response = await fetch(
        `http://127.0.0.1/traider/watch-list/${id_watchList}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token " + localStorage.getItem("key"),
          },
          body: JSON.stringify({
            ticker,
          }),
        }
      );
      fetchWatchList();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchWatchList = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1/traider/${localStorage.getItem("id")}/watch-list/`,
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

  useEffect(() => {
    setLoading(true);
    fetchWatchList();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById("my_modal2").close();
  };

  if (loading) {
    return (
      <div className="rounded-lg bg-white py-7 px-8 mr-3 w-full">
        <div className="flex justify-between">
          <div className="flex">
            <div className="bg-[#B8F82F] w-10 h-7 rounded-sm flex items-center mb-2">
              <div className="bg-[#112D48] rounded-full w-1 h-1 ml-1 mr-1"></div>
              <Image src={Watchlist_Icon} alt="dynamic" />
            </div>
            <h3 className="font-semibold ml-2 text-lg">Watchlist</h3>
          </div>
          <button
            className="flex border-black border-solid border-1 py-1 px-1 justify-center align-center mt-2 text-xs font-normal rounded-2xl bg-[#B8F82F]"
            onClick={() => document.getElementById("my_modal2").showModal()}
          >
            <Image src={Plus} alt="person" className="" />
            <h2 className="mt-px ml-1 mt-0.5">Добавить бумагу</h2>
          </button>
        </div>
        <div className="overflow-y-auto max-h-72 overflow-hidden mt-5">
          <table className="table-xs border-spacing-0	border-collapse">
            <thead>
              <tr className="font-semibold text-xs text-center">
                <td className="mr-2">Тикер</td>
                <td className="w-20">Цена закрытия</td>
                <td className="w-20">Изменение цены</td>
                <td className="w-20">%</td>
                <td className="w-20">Объем</td>
                <td className="w-30">Капитализация</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Loading...</td>
                <td>Loading...</td>
                <td>Loading...</td>
                <td>Loading...</td>
                <td>Loading...</td>
                <td>Loading...</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-white py-7 px-8 mr-3 w-3/6">
      <div className="flex justify-between">
        <div className="flex">
          <div className="bg-[#B8F82F] w-10 h-7 rounded-sm flex items-center mb-2">
            <div className="bg-[#112D48] rounded-full w-1 h-1 ml-1 mr-1"></div>
            <Image src={Watchlist_Icon} alt="dynamic" />
          </div>
          <h3 className="font-semibold ml-2 text-lg">Watchlist</h3>
        </div>
        <button
          className="flex border-black border-solid border-1 py-1 px-1 justify-center align-center mt-2 text-xs font-normal rounded-2xl bg-[#B8F82F]"
          onClick={() => document.getElementById("my_modal2").showModal()}
        >
          <Image src={Plus} alt="person" className="" />
          <h2 className="mt-px ml-1 mt-0.5">Добавить бумагу</h2>
        </button>
      </div>
      <div className="overflow-y-auto max-h-72 overflow-hidden mt-5">
        <table className="table-xs border-spacing-0	border-collapse">
          <thead>
            <tr className="font-semibold text-xs text-center">
              <td className="mr-2">Тикер</td>
              <td className="w-20">Цена закрытия</td>
              <td className="w-20">Изменение цены</td>
              <td className="w-20">%</td>
              <td className="w-20">Объем</td>
              <td className="w-30">Капитализация</td>
            </tr>
          </thead>
          <tbody className="text-sm font-normal text-center border-dotted border-[#2E00B7] border-y-2">
            {data?.map((watchList) => (
              <tr key={watchList.id}>
                <td className="pr-2">{watchList.ticker}</td>
                <td>{parseFloat(watchList.close_price.toFixed(2))}</td>
                <td
                  className={
                    watchList.price_change < 0
                      ? "text-[#FB3F73]"
                      : "text-[#19C20A]"
                  }
                >
                  {parseFloat(watchList.price_change?.toFixed(2))}
                </td>
                <td
                  className={
                    watchList.percent < 0 ? "text-[#FB3F73]" : "text-[#19C20A]"
                  }
                >
                  {parseFloat(watchList.percent?.toFixed(2))}
                </td>
                <td>{parseFloat(watchList.volume.toFixed(2))}</td>
                <td>{parseFloat(watchList.capitalization?.toFixed(2))}</td>
                <td className="w-30">
                  <button
                    className="rounded-2xl flex bg-[#FB3F73] py-1 px-2 text-white font-normal text-xs	"
                    onClick={() => {
                      setDeleteId(watchList.id);
                      document.getElementById("modal_close").showModal();
                    }}
                  >
                    <Image src={Cross} className="mr-1" alt="plus"></Image>
                    Удалить
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <dialog id="my_modal2" className="bg-transparent">
        <div className="modal-box max-w-[40rem] bg-white">
          <form method="dialog">
            <div className="flex">
              <div className="bg-[#B8F82F] border-black border-solid border-1 w-10 h-7 rounded-sm flex items-center mb-7 mt-1 rounded-md">
                <div className="bg-[#112D48] rounded-full w-1 h-1 ml-1 mr-[6px]"></div>
                <Image src={Plus} alt="person" width={18} height={18} />
              </div>
              <h3 className="text-lg text-black font-semibold ml-2 mt-1">
                Добавить watchlist
              </h3>
              <button className="button mt-3 button-sm button-circle text-[#FB3F73] button-ghost absolute right-2 top-2">
                ✕
              </button>
            </div>
            {/* if there is a button in form, it will close the modal */}
          </form>
          <div className="flex">
            <div className="text-black text-base font-medium mr-28">
              <h3 className="mb-3">Тикер</h3>
            </div>
            <div className="text-[#112D48] text-base font-light text-right mr-5">
              <input
                className="bg-[#ECE6E1] w-40 h-7 border-solid border-black border-modal rounded-md mb-2"
                onChange={(e) => setTicker(e.target.value)}
              ></input>
            </div>
          </div>
          <button
            className="flex border-black border-solid border-1 py-[6px] px-4 justify-center mx-auto border-solid border-black mt-2 text-base font-semibold rounded-2xl text-[#112D48] bg-[#B8F82F]"
            onClick={(e) => {
              addWatchList(e);
              handleSubmit(e);
            }}
          >
            <Image src={Plus} alt="person" width={25} />
            <h2 className="mt-px ml-1 ml-5 mr-7 mt-0.5">Добавить</h2>
          </button>
        </div>
      </dialog>
      <dialog id="modal_close" className="bg-transparent">
        <div className="modal-box max-w-[40rem] bg-white">
          <form method="dialog">
            <div className="flex">
              <div className="bg-[#B8F82F] border-black border-solid border-1 w-10 h-7 rounded-sm flex items-center mb-7 mt-1 rounded-md">
                <div className="bg-[#112D48] rounded-full w-1 h-1 ml-1 mr-[6px]"></div>
                <Image src={Plus} alt="person" width={18} height={18} />
              </div>
              <h3 className="text-lg text-black font-semibold ml-2 mt-1">
                Удалить watchlist
              </h3>
              <button className="button mt-3 button-sm button-circle text-[#FB3F73] button-ghost absolute right-2 top-2">
                ✕
              </button>
            </div>
            {/* if there is a button in form, it will close the modal */}
          </form>
          <div className="flex">
            <div className="text-black text-base font-medium mr-28">
              <h3 className="mb-3">Тикер</h3>
            </div>
            <div className="text-[#112D48] text-base font-light text-right mr-5">
              <input
                className="bg-[#ECE6E1] w-40 h-7 border-solid border-black border-modal rounded-md mb-2"
                onChange={(e) => setTicker(e.target.value)}
              ></input>
            </div>
          </div>
          <button
            className="flex border-black border-solid border-1 py-[6px] px-4 justify-center mx-auto border-solid border-black mt-2 text-base font-semibold rounded-2xl text-[#112D48] bg-[#FB3F73]"
            onClick={() => {
              closeWatchList(deleteId);
              document.getElementById("modal_close").close();
            }}
          >
            <Image src={Plus} alt="person" width={25} />
            <h2 className="mt-px ml-1 ml-5 mr-7 mt-0.5">Удалить</h2>
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default Watchlist;
