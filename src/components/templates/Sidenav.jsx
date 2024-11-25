import { Link } from "react-router-dom";
const Sidenav = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400  p-8">
      <h1 className="text-2xl text-white font-bold">
        <i className="text-[#6556CD] mr-2  ri-tv-fill"></i>
        <span className="text-2xl ">StreamSnax.</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-xl gap-1">
        <h1 className="text-white font-semibold text-xl mt-10 mb-2">
          New Feeds
        </h1>
        <Link
          to="/trending"
          className="hover:bg-[#6556CD] duration-300 p-3 hover:text-white rounded-lg "
        >
          <i className="mr-2 ri-fire-fill"></i>Trending
        </Link>
        <Link
          to="/popular"
          className="hover:bg-[#6556CD] duration-300 p-3 hover:text-white rounded-lg "
        >
          <i className="mr-2 ri-bard-fill"></i>Popular
        </Link>
        <Link
          to="/movie"
          className="hover:bg-[#6556CD] duration-300 p-3 hover:text-white rounded-lg "
        >
          <i className="mr-2 ri-movie-2-fill"></i> Movies
        </Link>
        <Link
          to="/tvshows"
          className="hover:bg-[#6556CD] duration-300 p-3 hover:text-white rounded-lg "
        >
          <i className="mr-2 ri-tv-2-fill"></i> Tv Shows
        </Link>
        <Link
          to="/people"
          className="hover:bg-[#6556CD] duration-300 p-3 hover:text-white rounded-lg "
        >
          <i className="mr-2 ri-team-fill"></i> People
        </Link>
      </nav>
      <hr className="border-none h-[1px] bg-zinc-400" />
      <nav className="flex flex-col text-zinc-400 text-xl gap-1">
        <h1 className="text-white font-semibold text-xl mt-10 mb-2">
          Website Information
        </h1>
        <Link
          to="/about"
          className="hover:bg-[#6556CD] duration-300 p-3 hover:text-white rounded-lg "
        >
          <i className="mr-2 ri-information-fill"></i>About App
        </Link>
        <Link
          to="/contact"
          className="hover:bg-[#6556CD] duration-300 p-3 hover:text-white rounded-lg "
        >
          <i className="mr-2 ri-phone-fill"></i>Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
