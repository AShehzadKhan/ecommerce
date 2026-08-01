import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopContext";
import { assets } from "../assets/asset";
import { useLocation } from "react-router-dom";
const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setVisible(location.pathname.includes("collection"));
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t border-gray-400 bg-gray-50 text-center">
      <div className="inline-flex justify-center items-center border border-gray-400 px-5 py-2 my-5 mx-2 rounded-full w-3/4 sm:w-1/2">
        <input
          type="text"
          className="flex-1 outline-none bg-inherit text-sm"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img className="w-4" src={assets.search_icon} alt="" />
      </div>
      <img
        className="inline w-5 sm:w-10 text-gray-500 cursor-pointer"
        src={assets.cross_icon}
        alt=""
        onClick={() => setShowSearch(false)}
      />
    </div>
  ) : null;
};

export default SearchBar;
