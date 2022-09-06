import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import NewReleases from "../components/newReleases/NewReleases";
import WeatherInfo from "../components/weatherInfo/WeatherInfo";
import { singers } from "../data";

export default function Singer() {
  const { name } = useParams();
  const data = singers.filter((each) => each.slang === name);

  return (
    <div className="mx-4 lg:mx-20 my-5">
      <Navbar />
      <div className="grid lg:grid-cols-4 gap-4 mt-3">
        <div>
          <WeatherInfo />
          <NewReleases />
        </div>
        <div Name="col-span-3">
          <div className="max-w-4 h-auto lg:h-screen flex-wrap  lg:my-0">
            <div
              id="profile"
              className="w-full lg:w-full rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-100  lg:mx-0"
            >
              <div className="grid lg:grid-cols-2">
                <div>
                  <img
                    className=" rounded-lg lg:m-6 p-8 lg:p-0"
                    src={data[0].img}
                    alt="img"
                  ></img>
                </div>

                <div className="p-4 md:p-12 text-center lg:text-left">
                  <h1 className="text-3xl font-bold pt-8 lg:pt-0">
                    {data[0].nameSurname}
                  </h1>
                  <p className=" font-semibold">Known As {data[0].nick}</p>
                  <div className="mx-auto mb-4 lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

                  <div className="mb-3">
                    <div className="bg-black  text-white font-bold py-2 px-4 rounded-full">
                      Birth date: {data[0].birthDate}
                    </div>

                    <div className="mt-3">
                      <div className="bg-black disabled text-white font-bold py-2 px-4 rounded-full">
                        Birth Place: {data[0].birthPlace}
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 text-xl font-semibold">
                    {data[0].about}
                  </div>
                  {/*  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
