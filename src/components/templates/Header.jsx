import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  //   console.log(data);
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundSize: "cover",
        backgroundPosition: "top 10%",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[55vh] text-white flex flex-col justify-end items-start p-[2%]"
    >
      <h1 className="w-[70%] text-5xl font-black">
        {data.name || data.title || data.original_title || data.original_name}
      </h1>
      <p className="w-[45%] mt-3 mb-3 ">
        {data.overview.slice(0, 125)}...
        <Link
          to={`/${data.media_type}/details/${data.id}`}
          className="text-blue-400"
        >
          more
        </Link>
      </p>
      <p className="text-white ">
        <i className="text-yellow-500 ri-megaphone-fill"></i>
        {data.release_date || "No Information"}
        <i className="text-yellow-500 ml-5 ri-album-fill"></i>
        {data.media_type.toUpperCase()}
      </p>
      <Link to={`/${data.media_type}/details/${data.id}/trailer`} className="p-4 rounded  mt-5 bg-[#6556CD]">Watch Trailer</Link>
    </div>
  );
};

export default Header;
