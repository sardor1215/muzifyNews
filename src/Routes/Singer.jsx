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
      <div class="grid lg:grid-cols-4 gap-4 mt-3">
        <div>
          <WeatherInfo />
          <NewReleases />
        </div>
        <div className="col-span-3">
          {/* <div className=" shadow-sq py-1  border-solid border divide-slate-600 justify-center">
            <div className=" grid grid-cols-3">
              <img
                className="mx-5 mt-5 rounded-lg h-52"
                src={
                  "https://i.scdn.co/image/ab67616d0000b273b75e062b52a8bbee368b70b6"
                }
              />
              <div className="col-span-2">
                <div>{data[0].about}</div>
                <div className="grid grid-cols-2">
                  <div>12</div>
                  <div>{data.about}</div>
                </div>
              </div>
              <div>{data.slang}</div>
            </div>
          </div> */}
          <div class="max-w-4 h-auto lg:h-screen flex-wrap  lg:my-0">
            <div
              id="profile"
              class="w-full lg:w-full rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-100  lg:mx-0"
            >
              <div className="grid lg:grid-cols-2">
                <div>
                  <img
                    className=" rounded-lg lg:m-6 p-8 lg:p-0"
                    src={data[0].img}
                  ></img>
                </div>

                <div class="p-4 md:p-12 text-center lg:text-left">
                  {/* <div class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center ">
                    <img src="https://i.scdn.co/image/ab67616d0000b2734406b919920896f9aaa56227"></img>
                  </div> */}

                  <h1 class="text-3xl font-bold pt-8 lg:pt-0">
                    {data[0].nameSurname}
                  </h1>
                  <p className="font-semibold">Known As {data[0].nick}</p>
                  <div class="mx-auto mb-4 lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

                  <div class="mb-3">
                    <button class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                      Birth date: {data[0].birthDate}
                    </button>

                    <div class="mt-3">
                      <button class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                        Birth Place: {data[0].birthPlace}
                      </button>
                    </div>
                  </div>
                  <div className="mt-5 text-xl font-semibold">
                    {data[0].about}
                  </div>
                  {/*  */}
                </div>
              </div>

              {/* <div class="w-full lg:w-2/5">
	
		<img src="https://source.unsplash.com/MP0IUfwrn0A" class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"/>

		
	</div> */}

              {/* <div class="absolute top-0 right-0 h-12 w-18 p-4">
		<button class="js-change-theme focus:outline-none">🌙</button>
	  </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
