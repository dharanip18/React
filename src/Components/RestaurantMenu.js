import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { MENU_IMG } from "../utils/constants";
import RestaurantMenuCategory from "./RestaurantMenuCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  const [check, setCheck] = useState(false);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    areaName,
    avgRating,
    costForTwoMessage,
    totalRatingsString,
    feeDetails,
  } = resInfo?.cards[0].card.card.info;

  const { itemCards } =
    resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  const categories =
    resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <div className="container res-info max-w-5xl mx-auto my-16">
      <div className="row flex justify-between w-10/12 mx-auto mb-3">
        <div className="col">
          <h1 className="mb-2 font-bold">{name}</h1>
          <p className="mb-2">{areaName}</p>
          <p className="mb-2">{feeDetails.message}</p>
        </div>
        <div className="col">
          <p className="mb-2">{avgRating}</p>
          <p className="mb-2">{totalRatingsString}</p>
        </div>
      </div>
      <div className="row flex justify-between w-10/12 mx-auto">
        <p>{costForTwoMessage}</p>
      </div>
      <div className="mt-6 border-t-2">
        {categories.map((category, index) => (
          <RestaurantMenuCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showItems={index == showIndex && check}
            setShowIndex={() => {
              setShowIndex(index);
              setCheck((value) => !value);
              console.log("i", index, showIndex);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
