import React from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpg";

const HorizontalCards = ({ data }) => {
  return (
    <div className="mb-5 p-3 w-[100%] flex overflow-y-hidden text-white">
      {data.length > 0 ? (
        data.map((data, index) => (
          <Link
            to={`/${data.media_type}/details/${data.id}`}
            key={index}
            className="min-w-[19%] h-[35vh]  mr-5 mb-5 bg-zinc-900"
          >
            <img
              className="w-full h-[52%]  object-cover"
              src={
                data.backdrop_path || data.poster_path
                  ? `https://image.tmdb.org/t/p/original/${
                      data.backdrop_path || data.poster_path
                    }`
                  : noimage
              }
              alt=""
            />
            <div className="p-3 h-[45%] overflow-y-auto">
              <h1 className=" text-xl font-semibold">
                {data.name ||
                  data.title ||
                  data.original_title ||
                  data.original_name}
              </h1>
              <p className="text-sm">
                {data.overview.slice(0, 38)}...
                <span className="text-zinc-500">more</span>
              </p>
            </div>
          </Link>
        ))
      ) : (
        <h1 className="text-3xl text-white font-black text-center mt-5">
          Nothing To Show
        </h1>
      )}
    </div>
  );
};

export default HorizontalCards;
