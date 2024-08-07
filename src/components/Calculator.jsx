import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignal,
  faBatteryFull,
  faWifi,
  faPercent,
  faDivide,
  faXmark,
  faMinus,
  faPlus,
  faEquals,
  faDeleteLeft,
} from "@fortawesome/free-solid-svg-icons";

function Calculator() {
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
  );

  const [input, setInput] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    }, 60000); // Update every minute to avoid unnecessary updates
    return () => clearInterval(interval);
  }, []);

  let evalEqual = "";

  const handleButtonClick = (value) => {
    if (value === "AC") {
      setInput("");
    } else if (value === "x") {
      setInput(input.slice(0, -1));
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput("Error");
      }
    } else {
      setInput((preValue) => preValue + value);
    }
  };

  return (
    <div className="font-roboto bg-[#212327] max-w-[390px] my-12 mx-auto rounded-2xl pt-4 shadow-2xl">
      <div className="mx-7">
        <div className="flex justify-between gap-52">
          <div className="font-medium text-white">{time}</div>
          <div className=" flex justify-between items-center gap-2">
            <FontAwesomeIcon className="text-white" icon={faSignal} />
            <FontAwesomeIcon className="text-white" icon={faWifi} />
            <FontAwesomeIcon className="text-white" icon={faBatteryFull} />
          </div>
        </div>

        <div className="text-white pt-32 pb-11 flex flex-col items-end pr-6 gap-6">
          <div className="text-2xl">{input}</div>
        </div>
      </div>

      <div className="bg-[#26292d] px-11 pt-12 pb-9 max-w-screen-md h-[498px] rounded-3xl m-auto shadow-2xl">
        <div className=" grid grid-cols-4 grid-rows-5 gap-x-4 gap-y-6">
          {/* row - 1 */}
          <div
            onClick={() => {
              handleButtonClick("%");
            }}
            className="w-16 h-16 col-span-1 row-span-1 bg-[#323439] flex justify-center items-center rounded-full cursor-pointer"
          >
            <FontAwesomeIcon className="text-white" icon={faPercent} />
          </div>
          <div
            onClick={() => {
              handleButtonClick("/");
            }}
            className="w-16 h-16 col-span-1 row-span-1 bg-[#323439] flex justify-center items-center rounded-full cursor-pointer"
          >
            <FontAwesomeIcon className="text-white" icon={faDivide} />
          </div>
          <div
            onClick={() => {
              handleButtonClick("*");
            }}
            className="w-16 h-16 col-span-1 row-span-1 bg-[#323439] flex justify-center items-center rounded-full cursor-pointer"
          >
            <FontAwesomeIcon className="text-white" icon={faXmark} />
          </div>
          <div
            onClick={() => {
              handleButtonClick("x");
            }}
            className="w-16 h-16 col-span-1 row-span-1 bg-[#323439] flex justify-center items-center rounded-full cursor-pointer"
          >
            <FontAwesomeIcon
              className="text-[#ed0e98] text-2xl"
              icon={faDeleteLeft}
            />
          </div>

          {/* row - 2 */}
          <div
            onClick={() => {
              handleButtonClick("7");
            }}
            className="w-16 h-16 col-span-1 row-span-1 flex justify-center items-center rounded-full cursor-pointer"
          >
            <div className="text-white text-2xl">7</div>
          </div>
          <div
            onClick={() => {
              handleButtonClick("8");
            }}
            className="w-16 h-16 col-span-1 row-span-1 flex justify-center items-center rounded-full cursor-pointer"
          >
            <div className="text-white text-2xl">8</div>
          </div>
          <div
            onClick={() => {
              handleButtonClick("9");
            }}
            className="w-16 h-16 col-span-1 row-span-1 flex justify-center items-center rounded-full cursor-pointer"
          >
            <div className="text-white text-2xl">9</div>
          </div>
          <div
            onClick={() => {
              handleButtonClick("-");
            }}
            className="w-16 h-16 col-span-1 row-span-1 bg-[#323439] flex justify-center items-center rounded-full cursor-pointer"
          >
            <FontAwesomeIcon className="text-white" icon={faMinus} />
          </div>

          {/* row - 3 */}
          <div
            onClick={() => {
              handleButtonClick("4");
            }}
            className="w-16 h-16 col-span-1 row-span-1 flex justify-center items-center rounded-full cursor-pointer"
          >
            <div className="text-white text-2xl">4</div>
          </div>
          <div
            onClick={() => {
              handleButtonClick("5");
            }}
            className="w-16 h-16 col-span-1 row-span-1 flex justify-center items-center rounded-full cursor-pointer"
          >
            <div className="text-white text-2xl">5</div>
          </div>
          <div
            onClick={() => {
              handleButtonClick("6");
            }}
            className="w-16 h-16 col-span-1 row-span-1 flex justify-center items-center rounded-full cursor-pointer"
          >
            <div className="text-white text-2xl cursor-pointer">6</div>
          </div>
          <div
            onClick={() => {
              handleButtonClick("+");
            }}
            className="w-16 h-16 col-span-1 row-span-1 bg-[#323439] flex justify-center items-center rounded-full cursor-pointer"
          >
            <FontAwesomeIcon className="text-white" icon={faPlus} />
          </div>

          {/* row - 4 */}
          <div
            onClick={() => {
              handleButtonClick("1");
            }}
            className="w-16 h-16 col-span-1 row-span-1  flex justify-center items-center rounded-full cursor-pointer"
          >
            <div className="text-white text-2xl">1</div>
          </div>
          <div
            onClick={() => {
              handleButtonClick("2");
            }}
            className="w-16 h-16 col-span-1 row-span-1  flex justify-center items-center rounded-full cursor-pointer"
          >
            <div className="text-white text-2xl">2</div>
          </div>
          <div
            onClick={() => {
              handleButtonClick("3");
            }}
            className="w-16 h-16 col-span-1 row-span-1  flex justify-center items-center rounded-full cursor-pointer"
          >
            <div className="text-white text-2xl">3</div>
          </div>
          <div
            onClick={() => {
              handleButtonClick("=");
            }}
            className="col-span-1 row-span-2 bg-gradient-to-b from-[#ed0e98] to-[#fe5a2d] shadow flex justify-center items-center rounded-full cursor-pointer"
          >
            <FontAwesomeIcon className="text-white" icon={faEquals} />
          </div>

          {/* row - 5 */}
          <div
            onClick={() => {
              handleButtonClick("AC");
            }}
            className="w-16 h-16 col-span-1 row-span-1  flex justify-center items-center rounded-full cursor-pointer"
          >
            <div className="text-[#ed0e98] text-2xl">AC</div>
          </div>
          <div
            onClick={() => {
              handleButtonClick("0");
            }}
            className="w-16 h-16 col-span-1 row-span-1  flex justify-center items-center rounded-full cursor-pointer"
          >
            <div className="text-white text-2xl">0</div>
          </div>
          <div
            onClick={() => {
              handleButtonClick(".");
            }}
            className="w-16 h-16 col-span-1 row-span-1  flex justify-center items-center rounded-full cursor-pointer"
          >
            <div className="text-white text-2xl">.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
