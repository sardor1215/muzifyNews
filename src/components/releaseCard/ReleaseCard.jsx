import { Tooltip } from "@material-tailwind/react";
import React from "react";

export default function ReleaseCard(props) {
  return (
    <div className="flex items-center mx-6 mb-3  gap-4 bg-white">
      <img className="h-12 rounded-full" src={props.img} alt={"img"} />
      <span>
        <a href={props.link} target="_blank" rel="noreferrer">
          <Tooltip content="Play on spotify" className="">
            <div className="border-b-solid border-b-2 border-black-">
              <strong>{props.name}</strong>
              <span> - </span>
              <span className="text-end font-mono font-semibold text-base">
                {props.song}
              </span>
            </div>
          </Tooltip>
        </a>
      </span>
    </div>
  );
}
