import React from "react";
import Navbar from "../components/navbar/Navbar";
import NewReleases from "../components/newReleases/NewReleases";
import TopChartCard from "../components/TopChartCard";
import WeatherInfo from "../components/weatherInfo/WeatherInfo";
import { topCharts } from "../data";

export default function TopCharts() {
  return (
    <div className=" mx-4 lg:mx-20 my-5">
      <Navbar />
      <div className="grid lg:grid-cols-4 gap-4 mt-3">
        <div>
          <WeatherInfo />
          <NewReleases />
        </div>
        <div className="col-span-3 place-content-center ">
          {topCharts.map((each, num) => {
            return (
              <TopChartCard
                key={num}
                num={num + 1}
                img={each.img}
                slang={each.slang}
                singer={each.singer}
                song={each.song}
                genre={each.genre}
                link={each.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
