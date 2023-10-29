"use client";
import Image from "next/image";
import History_Icon from "@/assets/history";
import { useEffect, useState } from "react";
import "../../app/globals.css";
import Arrow from "@/assets/arrow";
import Plus from "@/assets/plus";
import Cross from "@/assets/cross";
import BriefCase from "@/assets/briefcase";

const ActivePositions = () => {
  const [deleteId, setDeleteId] = useState(null);
  const [ticker, setTicker] = useState("");
  const [open_price, setOpenPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [position, setPosition] = useState("");
  const [stop_loss, setStopLoss] = useState("");
  const [take_profit, setTakeProfit] = useState("");
  const [target_price, setTargetPrice] = useState("");
  const [close_price, setClosePrice] = useState("");
  const [sum, setSum] = useState("");

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch example
  const fetchData = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch(
        "http://127.0.0.1/traider/active-positions/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token " + localStorage.getItem("key"),
          },
          body: JSON.stringify({
            ticker,
            open_price,
            amount,
            position,
            stop_loss,
            take_profit,
            target_price,
          }),
        }
      );
      const updatedSumResult =
        parseFloat(localStorage.getItem("sumResult")) + parseFloat(sum);
      localStorage.setItem("sumResult", updatedSumResult);
      const result = await response.json();
      fetchActivePositions();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchActivePositions = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1/traider/${localStorage.getItem(
          "id"
        )}/active-positions/`,
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
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchActivePositions();
  }, []);

  let sumSum = 0;
  let percentSum = 0;
  let result = 0;
  let count = 0;
  let resultArray = [];
  let sectorArray = [];

  const closeActive = async (id_active) => {
    try {
      const response = await fetch(
        `http://127.0.0.1/traider/close-active-position/${id_active}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token " + localStorage.getItem("key"),
          },
          body: JSON.stringify({
            ticker,
            close_price,
            amount,
            sum,
          }),
        }
      );
      const updatedSumResult =
        parseFloat(localStorage.getItem("sumResult")) - parseFloat(sum);
      localStorage.setItem("sumResult", updatedSumResult);
      fetchActivePositions();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Add your logic to close the modal here
    document.getElementById("my_modal").close();
    // Call the fetchData function here or perform any other necessary actions
  };

  if (loading) {
    return (
      <div className="rounded-lg bg-white py-7 px-8 mr-3 w-full">
        <div className="flex justify-between">
          <div className="flex">
            <div className="bg-[#B8F82F] border-black border-solid border-1 w-10 h-7 rounded-sm flex items-center mb-2">
              <div className="bg-[#112D48] rounded-full w-1 h-1 ml-1 mr-1"></div>
              <Image src={BriefCase} alt="dynamic" />
            </div>
            <h3 className="font-semibold ml-2 text-lg">Активные позиции</h3>
          </div>
          <button
            className="flex border-black border-solid border-1 py-1 px-1 justify-center align-center border-solid border-black mt-2 text-xs font-normal rounded-2xl bg-[#B8F82F]"
            onClick={() => document.getElementById("my_modal").showModal()}
          >
            <Image src={Plus} alt="person" className="" />
            <h2 className="mt-px ml-1 mt-0.5">Добавить бумагу</h2>
          </button>
        </div>
        <div className="overflow-y-auto max-h-72 overflow-hidden mt-5">
          <table className="table-xs border-spacing-0	border-collapse ">
            <thead>
              <tr className="font-semibold text-xs text-center">
                <td className="mr-2">Тикер</td>
                <td className="w-20">Цена покупки</td>
                <td className="w-20">Текущая цена</td>
                <td className="w-20">Кол-во акций</td>
                <td className="w-20">Сумма</td>
                <td className="w-20">Доля</td>
                <td className="w-20">Позиция</td>
                <td className="w-20">%</td>
                <td className="w-20">Результат</td>
                <td className="w-20">Stop Loss</td>
                <td className="w-20">Take Profit</td>
                <td className="w-20">Сектор</td>
                <td className="w-20">ATR</td>
                <td className="w-20">Vol</td>
                <td className="w-30">Целевая цена</td>
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
                <td>Loading...</td>
                <td>Loading...</td>
                <td>Loading...</td>
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
    <div className="rounded-lg bg-white py-7 px-8 mr-3 w-full">
      <div className="flex justify-between">
        <div className="flex">
          <div className="bg-[#B8F82F] border-black border-solid border-1 w-10 h-7 rounded-sm flex items-center mb-2">
            <div className="bg-[#112D48] rounded-full w-1 h-1 ml-1 mr-1"></div>
            <Image src={BriefCase} alt="dynamic" />
          </div>
          <h3 className="font-semibold ml-2 text-lg">Активные позиции</h3>
        </div>
        <button
          className="flex border-black border-solid border-1 py-1 px-1 justify-center align-center border-solid border-black mt-2 text-xs font-normal rounded-2xl bg-[#B8F82F]"
          onClick={() => document.getElementById("my_modal").showModal()}
        >
          <Image src={Plus} alt="person" className="" />
          <h2 className="mt-px ml-1 mt-0.5">Добавить бумагу</h2>
        </button>
      </div>
      <div className="overflow-y-auto max-h-72 overflow-hidden mt-5">
        <table className="table-xs border-spacing-0	border-collapse ">
          <thead>
            <tr className="font-semibold text-xs text-center">
              <td className="mr-2">Тикер</td>
              <td className="w-20">Цена покупки</td>
              <td className="w-20">Текущая цена</td>
              <td className="w-20">Кол-во акций</td>
              <td className="w-20">Сумма</td>
              <td className="w-20">Доля</td>
              <td className="w-20">Позиция</td>
              <td className="w-20">%</td>
              <td className="w-20">Результат</td>
              <td className="w-20">Stop Loss</td>
              <td className="w-20">Take Profit</td>
              <td className="w-20">Сектор</td>
              <td className="w-20">ATR</td>
              <td className="w-20">Vol</td>
              <td className="w-30">Целевая цена</td>
            </tr>
          </thead>
          <tbody className="text-sm font-normal text-center border-dotted border-[#2E00B7] border-t-2">
            {data?.map((active) => (
              <tr key={active.id}>
                <div className="hidden">{(sumSum = sumSum + active.sum)}</div>
                <div className="hidden">{count++}</div>
                <div className="hidden">
                  {(percentSum = percentSum + active.percent_value)}
                </div>{" "}
                <div className="hidden">
                  {resultArray.push(active.result)}
                  {(result = result + active.result)}
                </div>
                <td className="pr-2">{active.ticker}</td>
                <td>{parseFloat(active.open_price.toFixed(2))}</td>
                <td>{parseFloat(active.current_price.toFixed(2))}</td>
                <td>{parseFloat(active.amount.toFixed(2))}</td>
                <td>{parseFloat(active.sum.toFixed(2))}</td>
                <td>{parseFloat(active.share.toFixed(2))}</td>
                <td>{active.position}</td>
                <td
                  className={
                    active.percent_value < 0
                      ? "text-[#FB3F73]"
                      : "text-[#19C20A]"
                  }
                >
                  {parseFloat(active.percent_value.toFixed(2))}
                </td>
                <td
                  className={
                    active.result < 0 ? "text-[#FB3F73]" : "text-[#19C20A]"
                  }
                >
                  {parseFloat(active.result.toFixed(2))}
                </td>
                <td>{parseFloat(active.stop_loss.toFixed(2))}</td>
                <td>{parseFloat(active.take_profit.toFixed(2))}</td>
                <td>{active.sector}</td>
                <div className="hidden">{sectorArray.push(active.share)}</div>
                <td>{active.atr}</td>
                <td>{parseFloat(active.volume?.toFixed(2))}</td>
                <td>{parseFloat(active.target_price?.toFixed(2))}</td>
                <td className="w-30">
                  <button
                    className="rounded-2xl flex bg-[#FB3F73] py-1 px-2 text-white font-normal text-xs	"
                    onClick={() => {
                      setDeleteId(active.id);
                      document.getElementById("close_modal").showModal();
                    }}
                  >
                    <Image src={Cross} className="mr-1" alt="plus"></Image>
                    Закрыть
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <table className="table-xs border-spacing-0	border-collapse border-dotted border-[#2E00B7] border-t-2">
        <tbody className="text-sm font-normal text-center">
          <tr className="font-semibold text-xs text-center">
            <td className="mr-2"></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{parseFloat(sumSum.toFixed(2))}</td>
            <td></td>
            <td></td>
            <td
              className={percentSum < 0 ? "text-[#FB3F73]" : "text-[#19C20A]"}
            >
              {parseFloat(percentSum.toFixed(2))}
            </td>
            <td className={result < 0 ? "text-[#FB3F73]" : "text-[#19C20A]"}>
              {parseFloat(result.toFixed(2))}
              {localStorage.setItem("sumResult", result)}
            </td>
            {localStorage.setItem("resultArray", JSON.stringify(resultArray))}
            {localStorage.setItem("sectorArray", JSON.stringify(sectorArray))}
            {localStorage.setItem("data", JSON.stringify(data))}
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <dialog id="my_modal" className="bg-transparent">
        <div className="modal-box max-w-[35rem] bg-white">
          <form
            method="dialog"
            onSubmit={() => {
              setPosition("");
              setTicker("");
              setOpenPrice("");
              setAmount("");
              setStopLoss("");
              setTakeProfit("");
              setTargetPrice("");
            }}
          >
            <div className="flex">
              <div className="bg-[#B8F82F] border-black border-solid border-1 w-10 h-7 rounded-sm flex items-center mb-7 mt-1 rounded-md">
                <div className="bg-[#112D48] rounded-full w-1 h-1 ml-1 mr-[6px]"></div>
                <Image src={Plus} alt="person" width={18} height={18} />
              </div>
              <h3 className="text-lg text-black font-semibold ml-2 mt-1">
                Добавить бумагу
              </h3>
              <button className="button mt-3 button-sm button-circle text-[#FB3F73] button-ghost absolute right-2 top-2">
                ✕
              </button>
            </div>
            {/* if there is a button in form, it will close the modal */}
            <div className="flex">
              <div className="text-black text-base font-medium">
                <h3 className="mb-3">Тикер</h3>
                <h3 className="mb-3 w-48">Цена покупки</h3>
                <h3 className="mb-3">Количество акций</h3>
                <h3 className="mb-3">Позиция</h3>
                <h3 className="mb-3">Stop loss</h3>
                <h3 className="mb-3">Take profit</h3>
                <h3 className="mb-3">Целевая цена</h3>
              </div>
              <div className="text-[#112D48] text-base font-light text-right">
                <input
                  className="bg-[#ECE6E1] w-40 h-7 border-solid border-black border-modal rounded-md mb-2"
                  onChange={(e) => setTicker(e.target.value.replace(/,/g, "."))}
                ></input>
                <input
                  className="bg-[#ECE6E1] w-40 h-7 border-solid border-black border-modal rounded-md mb-2"
                  onChange={(e) =>
                    setOpenPrice(e.target.value.replace(/,/g, "."))
                  }
                ></input>
                <input
                  className="bg-[#ECE6E1] w-40 h-7 border-solid border-black border-modal rounded-md mb-2"
                  onChange={(e) => setAmount(e.target.value.replace(/,/g, "."))}
                ></input>
                <input
                  className="bg-[#ECE6E1] w-40 h-7 border-solid border-black border-modal rounded-md mb-2"
                  onChange={(e) =>
                    setPosition(e.target.value.replace(/,/g, "."))
                  }
                ></input>
                <input
                  className="bg-[#ECE6E1] w-40 h-7 border-solid border-black border-modal rounded-md mb-2"
                  onChange={(e) =>
                    setStopLoss(e.target.value.replace(/,/g, "."))
                  }
                ></input>
                <input
                  className="bg-[#ECE6E1] w-40 h-7 border-solid border-black border-modal rounded-md mb-2"
                  onChange={(e) =>
                    setTakeProfit(e.target.value.replace(/,/g, "."))
                  }
                ></input>
                <input
                  className="bg-[#ECE6E1] w-40 h-7 border-solid border-black border-modal rounded-md mb-2"
                  onChange={(e) =>
                    setTargetPrice(e.target.value.replace(/,/g, "."))
                  }
                ></input>
              </div>
            </div>
            <button
              className="flex border-black border-solid border-1 py-[6px] px-4 justify-center mx-auto border-solid border-black mt-2 text-base font-semibold rounded-2xl text-[#112D48] bg-[#B8F82F]"
              onClick={(e) => {
                fetchData(e);
                handleSubmit(e);
              }}
            >
              <Image src={Plus} alt="person" width={25} />
              <h2 className="mt-px ml-1 ml-5 mr-7 mt-0.5">Добавить</h2>
            </button>
          </form>
        </div>
      </dialog>
      <dialog id="close_modal" className="bg-transparent">
        <div className="modal-box max-w-[35rem] bg-white">
          <form method="dialog">
            <div className="flex">
              <div className="bg-[#B8F82F] border-black border-solid border-1 w-10 h-7 rounded-sm flex items-center mb-7 mt-1 rounded-md">
                <div className="bg-[#112D48] rounded-full w-1 h-1 ml-1 mr-[6px]"></div>
                <Image src={Plus} alt="person" width={18} height={18} />
              </div>
              <h3 className="text-lg text-black font-semibold ml-2 mt-1">
                Закрыть позицию
              </h3>
              <button className="button mt-3 button-sm button-circle text-[#FB3F73] button-ghost absolute right-2 top-2">
                ✕
              </button>
            </div>
            {/* if there is a button in form, it will close the modal */}
          </form>
          <div className="flex">
            <div className="text-black text-base font-medium">
              <h3 className="mb-3">Тикер</h3>
              <h3 className="mb-3 w-48">Цена продажи</h3>
              <h3 className="mb-3">Количество акций</h3>
              <h3 className="mb-3">Сумма</h3>
            </div>
            <div className="text-[#112D48] text-base font-light text-right">
              <input
                className="bg-[#ECE6E1] w-40 h-7 border-solid border-black border-modal rounded-md mb-2"
                onChange={(e) => setTicker(e.target.value.replace(/,/g, "."))}
              ></input>
              <input
                className="bg-[#ECE6E1] w-40 h-7 border-solid border-black border-modal rounded-md mb-2"
                onChange={(e) =>
                  setClosePrice(e.target.value.replace(/,/g, "."))
                }
              ></input>
              <input
                className="bg-[#ECE6E1] w-40 h-7 border-solid border-black border-modal rounded-md mb-2"
                onChange={(e) => setAmount(e.target.value.replace(/,/g, "."))}
              ></input>
              <input
                className="bg-[#ECE6E1] w-40 h-7 border-solid border-black border-modal rounded-md mb-2"
                onChange={(e) => setSum(e.target.value.replace(/,/g, "."))}
              ></input>
            </div>
          </div>
          <button
            className="flex border-black border-solid border-1 py-[6px] px-4 justify-center mx-auto border-solid border-black mt-2 text-base font-semibold rounded-2xl text-[#112D48] bg-[#FB3F73] mt-32"
            onClick={() => {
              closeActive(deleteId);
              document.getElementById("close_modal").close();
            }}
          >
            <Image src={Plus} alt="person" width={25} />
            <h2 className="mt-px ml-1 ml-5 mr-7 mt-0.5">Продать</h2>
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default ActivePositions;
