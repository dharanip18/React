import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  // local state variable
  const [listRestaurant, setListRestaurant] = useState(resList);

  return (
    <div className="container main">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterListAvgRating = listRestaurant.filter(
              (res) => res.info.avgRating > 4.3
            );
            console.log(filterListAvgRating);
            setListRestaurant(filterListAvgRating);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
