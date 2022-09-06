import React from "react";
import { releaseList } from "../../data";

import ReleaseCard from "../releaseCard/ReleaseCard";

export default function NewReleases() {
  return (
    <div className="hidden md:block  shadow-sq py-1 mt-3 border-solid border divide-slate-600 justify-center bg-white overflow-y-auto">
      <p className="mx-7 mb-2 font-mono font-semibold text-lg">New Releases</p>

      {releaseList.map((each) => {
        return (
          <ReleaseCard
            key={each.song}
            name={each.name}
            song={each.song}
            link={each.link}
            img={each.img}
          />
        );
      })}
    </div>
  );
}
