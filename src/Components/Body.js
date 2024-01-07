import RestaurantCard, { promotedRestaurantCard } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {
  CHE_EGAT_API,
  CHE_EGAT_RESDATA,
  BEN_KORA_API,
  BEN_KORA_RESDATA,
} from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import resList from "../utils/mockData";

const Body = () => {
  // local state variable
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = promotedRestaurantCard(RestaurantCard);
  //this callback will be called once component rendered
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(CHE_EGAT_API);
    const json = await data.json();
    console.log(json);

    setListOfRestaurant(
      json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    console.log(
      json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredListOfRestaurant(
      json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <div className="row">
        <h1>Looks you are offile. Please check your internet connection!</h1>
      </div>
    );
  }

  //conditional rendering
  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="container main max-w-7xl mx-auto my-10">
      <div className="btn-container row flex gap-x-4 mb-8">
        <div className="search-box rounded-xl border border-black">
          <input
            className="focus:outline-none px-2"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn h-full rounded-r-xl px-3 bg-lime-500 text-white"
            onClick={() => {
              console.log("ST", searchText);
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log("FR", filteredRestaurant);
              setFilteredListOfRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn rounded-xl border-black border p-2"
          onClick={() => {
            const filterListAvgRating = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.3
            );
            console.log(filterListAvgRating);
            setFilteredListOfRestaurant(filterListAvgRating);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container flex max-w-7xl mx-auto justify-between flex-wrap gap-y-10">
        {filteredListOfRestaurant.map((restaurant) => (
          <Link
            className="res-card-link w-56"
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.aggregatedDiscountInfoV2 ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
