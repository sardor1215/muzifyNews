import React, { useEffect, useState } from "react";

export default function WeatherInfo() {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);
  let day = new Date().getDay();
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="hidden md:block  shadow-sq py-1 border-solid border divide-slate-600 justify-center bg-white">
      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-2 mx-7">
        <div className="col-span-2 ">
          <span className="text-gray-400 font-mono font-semibold">Today</span>
        </div>
        <div className="col-span-2 font-mono font-semibold ">
          <span className="text-lg ">{weekDays[day]}</span>
        </div>
        <div className="font-mono font-semibold">
          {new Date().toLocaleDateString()}
          {/* <FontAwesomeIcon icon={faBars} /> */}
        </div>
        <div className="font-mono font-semibold text-base">{clockState}</div>
      </div>
    </div>
  );
}
