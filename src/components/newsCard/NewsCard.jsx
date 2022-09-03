import React from "react";
import { Link } from "react-router-dom";

export default function NewsCard(props) {
  return (
    <div className="mx-3 mb-4 ">
      <Link
        to={`/news/${props.id}`}
        href="#"
        class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={props.img}
          alt=""
        />
        <div class=" flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
          <p class=" font-serif text-lg mb-3  text-gray-700 dark:text-gray-400">
            {props.main.slice(0, 50)}
          </p>
          <div className="grid grid-cols-2 font-mono font-semibold text-base">
            <span className="text-start">{props.views} views</span>
            <span className="text-end">{props.date}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
