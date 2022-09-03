import { data } from "autoprefixer";
import React from "react";
import { Link } from "react-router-dom";

export default function SingerCard(props) {
  return (
    <div className="flex bg-white border-b-2 border-slate-800">
      <img className=" mx-8 col-span-2 h-12 rounded-full" src={props.img}></img>
      <div className="col-span-4 mt-6 lg:mr-10">
        {/* <img className="h-20" src={props.img}></img> */}
        <Link
          className="underline text-blue-700 underline-offset-4 "
          to={`/singer/${props.slang}`}
        >
          <strong>{props.singer}</strong>
        </Link>
      </div>
      {/* <div className="font-mono font-semibold text-base m-auto">
        {props.genre}
      </div> */}
    </div>
  );
}
