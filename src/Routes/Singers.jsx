import React from "react";
import Navbar from "../components/navbar/Navbar";
import NewReleases from "../components/newReleases/NewReleases";
import SingerCard from "../components/SingerCard";
import WeatherInfo from "../components/weatherInfo/WeatherInfo";
import { singers } from "../data";

export default function Singers() {
  const data = singers;
  return (
    <div className="mx-4 lg:mx-20 my-5">
      <Navbar />
      <div class="grid lg:grid-cols-4 gap-4 mt-3">
        <div>
          <WeatherInfo />
          <NewReleases />
        </div>
        <div className="col-span-3 place-content-center ">
          <div className=" w-full bg-white ">
            <div className="grid grid-cols-4">
              <div className="col-span-3">
                <input className="w-full h-12" />
              </div>
              <div>Genre</div>
            </div>
            {data.map((each) => {
              return (
                <SingerCard
                  nick={each.nick}
                  img={each.img}
                  singer={each.nick}
                  slang={each.slang}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
