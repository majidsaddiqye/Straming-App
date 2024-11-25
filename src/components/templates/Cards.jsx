import React from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpg";
const Cards = ({ data, title }) => {
  return (
    <div className="flex flex-wrap w-full h-full px-[5%] mt-5 bg-[#1F1E24] ">
      {data.map((card, index) => (
        <Link
          to={`/${card.media_type || title}/details/${card.id}`}
          className="relative w-[30vh] mr-[3%] mb-[5%]"
          key={index}
        >
          {" "}
          <img
            className="h-[40vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
            src={
              card.poster_path || card.backdrop_path || card.profile_path
                ? `https://image.tmdb.org/t/p/original/${
                    card.poster_path || card.backdrop_path || card.profile_path
                  }`
                : noimage
            }
            alt=""
          />
          <h1 className="text-2xl text-zinc-200 mt-3 font-semibold">
            {card.name ||
              card.title ||
              card.original_title ||
              card.original_name}
          </h1>
          {/* card rating functionality */}
          {card.vote_average && (
            <div className="absolute right-[3%] bottom-[35%] text-white text-xl font-semibold bg-yellow-600 rounded-full w-[6vh] h-[6vh] flex items-center justify-center">
              {(card.vote_average * 10).toFixed()} <sup>%</sup>{" "}
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Cards;
