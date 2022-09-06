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
    <div className="mx-4 lg:mx-20 my-5">
      <Navbar />
      <div class="grid lg:grid-cols-4 gap-4 mt-3">
        <div>
          <WeatherInfo />
          <NewReleases />
        </div>
        <div className="col-span-3 bg-white">
          <div className=" shadow-sq py-1  border-solid border divide-slate-600 justify-center">
            <div className="flex flex-col grid lg:grid-cols-5">
              <div className="lg:col-span-2">
                <img className="px-4 py-4 w-fit" src={data.img} alt="img"></img>
              </div>
              <div className="col-span-3 mx-6 my-4">
                <p className="font-semibold text-3xl mb-0.5">{data.title}</p>
                <Link
                  className="font-mono font-semibold text-base mb-4 underline text-blue-700 underline-offset-4"
                  to={`/singer/${data.slang}`}
                >
                  {data.singer}
                </Link>
                <p className="my-4 font-serif text-lg">{data.main}</p>
                <div className="font-mono font-semibold text-base   grid grid-cols-2">
                  <div>{data.views} views</div>
                  <div className="justify-end">{data.date}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
