import React from "react";
import Navbar from "../components/navbar/Navbar";
import NewReleases from "../components/newReleases/NewReleases";
import WeatherInfo from "../components/weatherInfo/WeatherInfo";

export default function Singers() {
  return (
    <div className="mx-20 my-5">
      <Navbar />
      <div class="grid grid-cols-4 gap-4 mt-3">
        <div>
          <WeatherInfo />
          <NewReleases />
        </div>
        <div className="col-span-3 place-content-center ">
          <div className=" w-96 bg-white ">
            <div className="grid grid-cols-4">
              <div className="col-span-3">
                <input className="w-full" />
              </div>
              <div>Genre</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
