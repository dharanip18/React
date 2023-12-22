import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {
  CHE_EGAT_API,
  CHE_EGAT_RESDATA,
  BEN_KORA_API,
  BEN_KORA_RESDATA,
} from "../utils/constants";
// import resList from "../utils/mockData";

const Body = () => {
  // local state variable
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

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

  //conditional rendering
  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="container main">
      <div className="btn-container row">
        <div className="search-box">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
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
          className="filter-btn"
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
      <div className="res-container">
        {filteredListOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
