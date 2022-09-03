import Navbar from "../components/navbar/Navbar";
import News from "../components/news/News";
import WeatherInfo from "../components/weatherInfo/WeatherInfo";
import NewReleases from "../components/newReleases/NewReleases";

function Main() {
  return (
    <div className=" mx-4  lg:mx-20 my-5">
      <Navbar />
      <div class="grid lg:grid-cols-4 gap-4 mt-3">
        <div>
          <WeatherInfo />
          <NewReleases />
        </div>
        <div className="col-span-3">
          <News />
        </div>
      </div>
    </div>
  );
}

export default Main;
