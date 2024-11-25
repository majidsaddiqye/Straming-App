import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import Topnav from "./templates/Topnav";
import Dropdown from "./templates/Dropdown";
import Cards from "./templates/Cards";

const Tvshows = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("on_the_air");
  const [tvshows, setTVshows] = useState([]);
  const [page, setPage] = useState(1);
  const [hasmore, setHasmore] = useState(true);
  document.title = `TV || ${category.replace("_", " ").toUpperCase()}`;

  const GetTVshows = async () => {
    if (!hasmore) return; // Prevent fetching if no more data
    try {
      console.log("Requesting data for:", category, "Page:", page);
      const { data } = await axios.get(`/tv/${category}?page=${page}`);
      if (data.results.length > 0) {
        setTVshows((prev) => [...prev, ...data.results]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasmore(false);
      }
    } catch (error) {
      console.error(
        "Error fetching TV shows:",
        error.response?.data || error.message
      );
      setHasmore(false); // Prevent infinite retries on error
    }
  };

  const refreshHandler = () => {
    setPage(1);
    setTVshows([]);
    setHasmore(true); // Reset infinite scroll state
    GetTVshows();
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return tvshows.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="px-[5%] w-full flex items-center justify-between">
        <h1 className="text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          TV Shows{" "}
          <small className="text-zinc-600 text-sm">
            ({category.replace("_", " ")})
          </small>
        </h1>
        <div className="flex items-center w-[85%]">
          <Topnav />
          <Dropdown
            title="Category"
            options={["airing_today", "on_the_air", "popular", "top_rated"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={tvshows.length}
        next={GetTVshows}
        hasMore={hasmore}
        loader={<h4>Loading...</h4>}
      >
        <Cards data={tvshows} title="tv" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Tvshows;
