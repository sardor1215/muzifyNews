import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
      <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-2 mx-7">
        <div class="col-span-2 ">
          <span class="text-gray-400">Today</span>
        </div>
        <div class="col-span-2 ">
          <span class="text-lg ">{weekDays[day]}</span>
        </div>
        <div>
          {new Date().toLocaleDateString()}
          {/* <FontAwesomeIcon icon={faBars} /> */}
        </div>
        <div>{clockState}</div>
      </div>
    </div>
  );
}
