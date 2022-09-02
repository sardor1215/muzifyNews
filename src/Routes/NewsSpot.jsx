import React from "react";
import Navbar from "../components/navbar/Navbar";
import WeatherInfo from "../components/weatherInfo/WeatherInfo";
import NewReleases from "../components/newReleases/NewReleases";
import { useParams } from "react-router-dom";
import { newslist } from "../data";
import { Link } from "react-router-dom";

export default function NewsSpot() {
  const { id } = useParams();
  const data = newslist[id - 1];

  return (
    <div className="mx-20 my-5">
      <Navbar />
      <div class="grid lg:grid-cols-4 gap-4 mt-3">
        <div>
          <WeatherInfo />
          <NewReleases />
        </div>
        <div className="col-span-3">
          <div className=" shadow-sq py-1  border-solid border divide-slate-600 justify-center">
            <div className=" grid grid-cols-3">
              <img className="mx-5 mt-5 rounded-lg h-52" src={data.img} />
              <div className="col-span-2">
                <div>{data.title}</div>
                <div className="grid grid-cols-2">
                  <div>{data.views}</div>
                  <div>{data.date}</div>
                </div>
                <div>
                  <Link
                    className="underline text-blue-700 underline-offset-4"
                    to={`/singer/${data.slang}`}
                  >
                    {data.singer}
                  </Link>{" "}
                </div>
              </div>
              <div>{data.main}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
