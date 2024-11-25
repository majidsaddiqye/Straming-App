import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import noimage from "/noimage.jpg";

const Topnav = () => {
  const [query, setQuery] = useState("");
  const [searches, setsearches] = useState([]);
  const GetSearchs = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
      // console.log(data.results)
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    GetSearchs();
  }, [query]);
  return (
    <div className="w-full h-[9vh] relative flex justify-start items-center pl-[15%]">
      <i className="text-3xl text-zinc-400 ri-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[50%] mx-10 p-5 text-xl outline-none border-none bg-transparent text-zinc-200"
        type="text"
        placeholder="Search here.."
      />

      {/* input pr likhna pr close icon show hu */}

      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="text-3xl text-zinc-200 ri-close-fill"
        ></i>
      )}

      {/* search huna pr ya div data show kra gi */}

      <div className="z-[100] absolute overflow-auto w-[50%] max-h-[50vh] bg-zinc-100 top-[90%] rounded">
        {/* search mai data show krwae ga search krna pr  */}

        {searches.map((search, index) => (
          <Link
            to={`/${search.media_type || "title"}/details/${search.id}`}
            key={index}
            className="text-zinc-600 font-semibold hover:text-black hover:bg-zinc-300 duration-300 p-7 w-full  flex justify-start items-center border-b-2 border-zinc-300 "
          >
            <img
              className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-xl"
              src={
                search.backdrop_path || search.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      search.backdrop_path || search.profile_path
                    }`
                  : noimage
              }
              alt=""
            />
            <span>
              {search.name ||
                search.title ||
                search.original_title ||
                search.original_name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topnav;
