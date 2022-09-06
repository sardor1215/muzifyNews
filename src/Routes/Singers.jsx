import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import NewReleases from "../components/newReleases/NewReleases";
import SingerCard from "../components/SingerCard";
import WeatherInfo from "../components/weatherInfo/WeatherInfo";
import { singers } from "../data";

export default function Singers() {
  function card(each) {
    return (
      <SingerCard
        birthDate={each.birthDate}
        nick={each.nick}
        img={each.img}
        singer={each.nick}
        slang={each.slang}
      />
    );
  }

  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState(singers);
  // var data = singers;
  function byAge() {
    return [...singers].sort((a, b) => {
      // eslint-disable-next-line no-unused-expressions
      return a.birthDate.split(".")[2] - b.birthDate.split(".")[2];
    });
  }
  function byName() {
    return [...singers].sort((a, b) => {
      // eslint-disable-next-line no-unused-expressions
      return a.about.nick - b.nick;
    });
  }

  return (
    <div className="mx-4 lg:mx-20 my-5">
      <Navbar />
      <div className="grid lg:grid-cols-4 gap-4 mt-3">
        <div>
          <WeatherInfo />
          <NewReleases />
        </div>
        <div className="col-span-3 place-content-center ">
          <div className=" w-full bg-white ">
            <div className="grid lg:grid-cols-2">
              <div className="text-center">
                <input
                  className="mt-4 shadow-sq  rounded-md border-slate-800 w-2/4 h-12"
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search..."
                  type="search"
                />
              </div>
              <div className="text-center mt-4">
                <p className="font-mono font-semibold text-base">Sort by:</p>{" "}
                <button
                  className="bg-black  text-white  py-1 px-2 rounded-lg"
                  onClick={() => setData(byName)}
                >
                  name
                </button>{" "}
                <button
                  className="bg-black  text-white  py-1 px-2 rounded-lg"
                  onClick={() => setData(byAge)}
                >
                  age
                </button>
              </div>
            </div>

            {data
              .filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.nick.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map(card)}
          </div>
        </div>
      </div>
    </div>
  );
}
