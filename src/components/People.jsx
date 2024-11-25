import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import Topnav from "./templates/Topnav";
import Dropdown from "./templates/Dropdown";
import Cards from "./templates/Cards";

const People = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("popular");
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [hasmore, setHasmore] = useState(true);
  document.title = `People || ${category.replace("_", " ").toUpperCase()}`;

  const GetPeople = async () => {
    if (!hasmore) return;
    try {
      console.log("Requesting data for:", category, "Page:", page);
      const { data } = await axios.get(`/person/${category}?page=${page}`);
      if (data.results.length > 0) {
        setPeople((prev) => [...prev, ...data.results]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasmore(false);
      }
    } catch (error) {
      console.error(
        "Error fetching TV shows:",
        error.response?.data || error.message
      );
      setHasmore(false);
    }
  };

  const refreshHandler = () => {
    setPage(1);
    setPeople([]);
    setHasmore(true);
    GetPeople();
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return people.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="px-[5%] w-full flex items-center justify-between">
        <h1 className="text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          People{" "}
          <small className="text-zinc-600 text-sm">
            ({category.replace("_", " ")})
          </small>
        </h1>
        <div className="flex items-center w-[85%]">
          <Topnav />
        </div>
      </div>

      <InfiniteScroll
        dataLength={people.length}
        next={GetPeople}
        hasMore={hasmore}
        loader={<h4>Loading...</h4>}
      >
        <Cards data={people} title="people" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default People;
