import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadpeople, removepeople } from "../actions/peopleActions";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import HorizontalCards from "../components/templates/HorizontalCards";
import Dropdown from "../components/templates/Dropdown";

const Peopledetails = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id } = useParams();
  const { info } = useSelector((state) => state.people);
  const dispatch = useDispatch();
  const [category, setCategory] = useState("movie");

  useEffect(() => {
    dispatch(asyncloadpeople(id));
    return () => {
      dispatch(removepeople());
    };
  }, [id]);

  return info ? (
    <div className="px-[9%] w-screen overflow-y-auto">
      {/* part1 navgation */}
      <nav className="w-full h-[10vh]  text-zinc-100 items-center flex text-xl gap-10">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line"
        ></Link>
      </nav>

      {/* Flex container for Part 2 and Part 3 */}
      <div className="flex w-full gap-5">
        {/* Part 2 - Left Side */}
        <div className="w-[25%]">
          <img
            className="w-full h-[45vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />
          <hr className="mt-8 mb-3 border-none h-[2px] bg-zinc-500" />

          {/* Links accounts */}
          <div className="text-2xl text-white flex gap-x-5">
            <a
              target="_blank"
              href={`https://en.wikipedia.org/wiki/${info.externalid.wikidata_id}`}
            >
              <i className="ri-earth-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.facebook.com/${info.externalid.facebook_id}`}
            >
              <i className="ri-facebook-circle-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
            >
              <i className="ri-instagram-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.twitter.com/${info.externalid.twitter_id}`}
            >
              <i className="ri-twitter-x-fill"></i>
            </a>
          </div>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">
            Know For:
          </h1>
          <h1 className="text-zinc-400">{info.detail.known_for_department}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Gender:</h1>
          <h1 className="text-zinc-400">
            {info.detail.gender === 2 ? "Male" : "Female"}
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">
            Birthday:
          </h1>
          <h1 className="text-zinc-400">{info.detail.birthday}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">
            Deathday:
          </h1>
          <h1 className="text-zinc-400">
            {info.detail.deathday ? info.detail.deathday : "Still Alive"}
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">
            Place of Birth:
          </h1>
          <h1 className="text-zinc-400">{info.detail.place_of_birth}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">
            Also Known As:
          </h1>
          <h1 className="text-zinc-400">
            {info.detail.also_known_as.join(", ")}
          </h1>
        </div>

        {/* Part 3 - Right Side */}
        <div className="w-[75%]">
          <h1 className="text-6xl text-zinc-400 font-black my-2">
            {info.detail.name}
          </h1>
          <h1 className="text-xl text-zinc-400 font-semibold">Biography:</h1>
          <p className="text-zinc-400 mt-3">{info.detail.biography}</p>

          <h1 className="text-lg text-zinc-400 font-semibold mt-4">Summary:</h1>
          <HorizontalCards data={info?.movieCredits?.cast} />

          <div className="w-full flex justify-between">
            <h1 className="text-xl text-zinc-400 font-semibold mt-4">
              Acting:
            </h1>
            <Dropdown
              title="category"
              options={["tv", "movie"]}
              func={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="list-disc text-zinc-400    w-full h-[50vh] shadow-xl overflow-x-hidden overflow-y-auto shadow-[rgba(255,255,255,.3)] mt-5 mb-5 border-2 border-zinc-700 p-10">
            {info[category + "Credits"].cast.map((c,i)=>(
              <li
                key={i}
                className="hover:text-white duration-300 cursor-pointer"
              >
                <Link to={`/${category}/details/${c.id}`}>
                  <span>
                    {c.character ||
                      c.title ||
                      c.original_title ||
                      c.original_name}
                  </span>
                  <span className="block ml-5 mt-1">
                    {c.character && `Character Name: ${
                      c.character}`}
                    </span>
                </Link>
              </li>
            ))}
             
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Peopledetails;
