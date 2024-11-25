import React, { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import Header from "./templates/Header";
import HorizontalCards from "./templates/HorizontalCards";
import Dropdown from "./templates/Dropdown";
import Loading from "./Loading";

const Home = () => {
  document.title = "Home Page";
  // Header ka ander trending movie poster show krwaya hai trending all api ka use krta hua

  const [wallpaper, setWallpaper] = useState(null);

  const HeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomData =
        data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(randomData);
      // console.log(randomData);
    } catch (error) {
      console.log("Error", error);
    }
  };
  // header ka necha ka trending data show krwaya hai
  const [trending, setTrending] = useState(null);

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);

      setTrending(data.results);
      // console.log(randomData);
    } catch (error) {
      console.log("Error", error);
    }
  };

  // dropdown category vise divide section
  const [category, setCategory] = useState("all");

  useEffect(() => {
    !wallpaper && HeaderWallpaper();
    GetTrending();
  }, [category]);
  return wallpaper && trending ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden ">
        <Topnav />
        <Header data={wallpaper} />

        {/* dropdown homepage functionality */}
        <div className="p-3 flex justify-between">
          <h1 className="text-3xl font-semibold text-zinc-400">Trending</h1>
          <Dropdown
            title="Filter"
            options={["tv", "movie", "all"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
        <HorizontalCards data={trending} />
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
