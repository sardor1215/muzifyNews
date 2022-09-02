import React from "react";
import { Tooltip } from "@material-tailwind/react";
import { Link } from "react-router-dom";
export default function TopChartCard(props) {
  return (
    <div className="grid grid-cols-7 bg-white border-b-2 border-slate-800">
      <div className="m-auto  bg-gradient-to-t">
        <p className="font-bold text-2xl">{props.num}</p>
      </div>
      <img className="h-20" src={props.img}></img>
      <div className="col-span-3 mt-6 lg:mr-10">
        <Link
          className="underline text-blue-700 underline-offset-4 "
          to={`/singer/${props.slang}`}
        >
          {props.singer}
        </Link>
        <span> - {props.song}</span>
      </div>
      <div className="m-auto">{props.genre}</div>
      <div className="m-auto">
        <Tooltip content="Play on spotify">
          <a href={props.link} target="_blank" rel="noreferrer">
            <img
              className="h-8"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png"
            />
          </a>
        </Tooltip>
      </div>
    </div>
  );
}
