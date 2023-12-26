import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

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

  return (
    <div className="container res-info">
      <div className="row">
        <div className="col">
          <h1>{name}</h1>
          <p>{areaName}</p>
          <p>{feeDetails.message}</p>
        </div>
        <div className="col">
          <p>{avgRating}</p>
          <p>{totalRatingsString}</p>
        </div>
      </div>
      <div className="row">
        <p>{costForTwoMessage}</p>
      </div>
      <div className="row">
        <h2>Menus</h2>

        {itemCards.map((item) => {
          <div>{item}</div>;
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
