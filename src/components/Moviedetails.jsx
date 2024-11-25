import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie, removemovie } from "../actions/movieActions";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loading from "./Loading";
import HorizontalCards from "../components/templates/HorizontalCards";
const Moviedetails = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "top 10%",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-screen h-screen px-[10%]  overflow-y-auto overflow-x-hidden "
    >
      {/* part1 navgation */}
      <nav className="w-full h-[10vh] text-zinc-100 items-center flex text-xl gap-10">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line"
        ></Link>
        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-external-link-fill"></i>
        </a>

        <a
          target="_blank"
          href={`https://en.wikipedia.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
        >
          imdb
        </a>
      </nav>

      {/* part2 Poster and details */}
      <div className="w-full flex">
        <img
          className="h-[70vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          })`}
          alt=""
        />
        <div className="content ml-[5%]">
          <h1 className="text-5xl font-black text-white">
            {info.detail.name ||
              info.detail.title ||
              info.detail.original_title ||
              info.detail.original_name}
            <small className="text-2xl font-bold text-zinc-300">
              ({info.detail.release_date.split("-")[0]})
            </small>
          </h1>

          <div className="mt-3 mb-5 flex text-white items-center gap-x-3">
            <span className=" text-white text-xl font-semibold bg-yellow-600 rounded-full w-[6vh] h-[6vh] flex items-center justify-center">
              {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>{" "}
            </span>

            <h1 className="font-semibold text-2xl w-[60px] leading-6 ">
              User Score
            </h1>
            <h1 className="">{info.detail.release_date}</h1>
            <h1 className="">
              {info.detail.genres.map((g, i) => g.name).join(",")}
            </h1>
            <h1 className="">{info.detail.runtime}min</h1>
          </div>

          <h1 className="text-xl font-semibold italic text-zinc-200">
            {info.detail.tagline}
          </h1>

          <h1 className="text-2xl mt-5 mb-3 text-white">Overview:</h1>
          <p className="text-white">{info.detail.overview}</p>

          <h1 className="text-2xl mt-5 mb-3 text-white">Movie Translated:</h1>
          <p className="text-white mb-6">{info.translations.join(", ")}</p>

          <Link
            className="px-7 py-4 text-white bg-[#6556CD] rounded-lg"
            to={`${pathname}/trailer`}
          >
            <i className="text-xl ri-play-fill"></i> Play Trailer
          </Link>
        </div>
      </div>

      {/* part3 watchProviders data*/}
      <div className="w-[80%] p-5">
        {/* Flatrate Section */}
        {info.watchproviders?.flatrate?.length > 0 && (
          <div className="flex items-center gap-x-10 mb-6">
            <h1 className="text-white text-lg font-bold">
              Available for Flatrate:
            </h1>
            <div className="flex items-center gap-x-4">
              {info.watchproviders.flatrate.map((w, i) => (
                <img
                  key={i}
                  title={w.provider_name}
                  className="w-[6vh] h-[6vh] rounded-md object-cover"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt="Provider Logo"
                />
              ))}
            </div>
          </div>
        )}

        {/* Rent Section */}
        {info.watchproviders?.rent?.length > 0 && (
          <div className="flex items-center gap-x-10 mb-6">
            <h1 className="text-white text-lg font-bold">
              Available for Rent:
            </h1>
            <div className="flex items-center gap-x-4">
              {info.watchproviders.rent.map((w, i) => (
                <img
                  key={i}
                  title={w.provider_name}
                  className="w-[6vh] h-[6vh] rounded-md object-cover"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt="Provider Logo"
                />
              ))}
            </div>
          </div>
        )}

        {/* Buy Section */}
        {info.watchproviders?.buy?.length > 0 && (
          <div className="flex items-center gap-x-10 mb-6">
            <h1 className="text-white text-lg font-bold">Available for Buy:</h1>
            <div className="flex items-center gap-x-4">
              {info.watchproviders.buy.map((w, i) => (
                <img
                  key={i}
                  title={w.provider_name}
                  className="w-[6vh] h-[6vh] rounded-md object-cover"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt="Provider Logo"
                />
              ))}
            </div>
          </div>
        )}

        {/* Fallback Section */}
        {!info.watchproviders?.flatrate?.length &&
          !info.watchproviders?.rent?.length &&
          !info.watchproviders?.buy?.length && (
            <div>
              <h1 className="text-white text-lg font-bold">
                No providers available
              </h1>
            </div>
          )}
      </div>

      {/* Part4 Recomendations sections */}
      <hr className="mt-8 mb-3 border-none h-[2px] bg-zinc-500" />
      <h1 className="text-3xl font-bold text-white">
        Recommendations and Similar Stuff
      </h1>
      <HorizontalCards
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default Moviedetails;
