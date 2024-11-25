import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import Topnav from "./templates/Topnav";
import Dropdown from "./templates/Dropdown";
import Cards from "./templates/Cards";
const Movie = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("upcoming");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasmore, setHasmore] = useState(true);
  document.title = "Movies || " + category.toUpperCase();

  const GetMovies = async () => {
    if (!hasmore) return; // Prevent fetching if no more data
    try {
      console.log("Requesting data for:", category, "Page:", page);
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      if (data.results.length > 0) {
        setMovies((prev) => [...prev, ...data.results]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasmore(false);
      }
    } catch (error) {
      console.log("Error:", error.response?.data || error.message);
    }
  };

  //infinite scrolling pr page show krna ka functionality
  const refreshHandler = () => {
    if (movies.length === 0) {
      GetMovies();
    } else {
      setPage(1);
      setMovies([]);
      GetMovies();
    }
  };

  useEffect(() => {
    // GetTrending();
    refreshHandler();
  }, [category]);

  return movies.length > 0 ? (
    <div className=" w-screen h-screen ">
      <div className="px-[5%] w-full flex items-center justify-between">
        <h1 className="text-2xl text-zinc-400 font-semibold ">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          Movies <small className="text-zinc-600 text-sm"> ({category})</small>
        </h1>
        <div className="flex items-center w-[85%]">
          <Topnav />
          <Dropdown
            title="Category"
            options={["popular", "top_rated", "upcoming", "now_playing"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
        </div>
      </div>

      {/* applying infinite scrolling */}
      <InfiniteScroll
        dataLength={movies.length}
        next={GetMovies}
        hasMore={hasmore}
        loader={<h4>Loading...</h4>}
      >
        <Cards data={movies} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Movie;
