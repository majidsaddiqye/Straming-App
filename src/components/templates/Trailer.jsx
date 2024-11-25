import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Notfound from "../Notfound";

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";

  const ytvideo = useSelector((state) => state[category].info.videos);
  console.log(ytvideo);
  //   console.log(pathname, ytvideo);
  return (
    <div className="absolute z-[1000] bg-[rgba(0,0,0,.8)] top-0 left-0 w-screen h-screen flex items-center justify-center">
      <Link
        onClick={() => navigate(-1)}
        className="absolute text-3xl text-white right-[5%] top-[5%] hover:text-[#6556CD] ri-close-line"
      ></Link>
      {ytvideo ? (
        <ReactPlayer
          controls
          height={550}
          width={1120}
          url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
        />
      ) : (
        <Notfound />
      )}
    </div>
  );
};

export default Trailer;
