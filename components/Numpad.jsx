import React, { useState } from "react";

function Numpad({ formatTime, time, formattedTime }) {
  const handleClick = (value) => {
    // onButtonClick(value);
    let timeString;
    if (value == "clear") {
      timeString = time.substring(0, time.length - 1);
    } else {
      timeString = time + value;
    }
    formatTime(timeString);
  };

  return (
    <>
      <div className=" flex flex-col items-center py-[24px]">
        <span className="text-[48px] text-center font-[700]">
          {formattedTime ? formattedTime : "0"}
        </span>
        {/* <span className="px-[16px] rounded-xl border-[#111111] bg-[#333333]">
          Mins
        </span> */}
      </div>
      <div>
        <div className="grid grid-cols-3 gap-2">
          {/* Number buttons */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
            <button
              key={number}
              onClick={() => handleClick(number)}
              className="p-4 text-2xl"
            >
              {number}
            </button>
          ))}
          {/* Clear button */}
          <button
            onClick={() => handleClick("clear")}
            className="p-4 text-2xl col-span-2"
          >
            Clear
          </button>
        </div>
      </div>
    </>
  );
}

export default Numpad;
