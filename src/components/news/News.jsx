import React from "react";
import { newslist } from "../../data";
import NewsCard from "../newsCard/NewsCard";

export default function News() {
  return (
    <div className="shadow-sq py-1  border-solid border divide-slate-600 justify-center">
      <p class="text-4xl mx-4 mb-4 font-bold  ">News</p>
      <div className="grid lg:grid-cols-2 ">
        {newslist.map((each) => {
          return (
            <NewsCard
              id={each.id}
              key={each.id}
              img={each.img}
              title={each.title}
              main={each.main}
              views={each.views}
              date={each.date}
            />
          );
        })}
      </div>
    </div>
  );
}
