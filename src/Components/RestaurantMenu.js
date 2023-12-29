import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { MENU_IMG } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

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
      <div
        className="row"
        style={{ display: "block", borderTop: "1px solid #ddd" }}
      >
        {/* <button
          className="accordion-header"
          onClick={() => {
            if (
              this.nextElementSibling.getAttribute("aria-hidden") == "false"
            ) {
              this.nextElementSibling.setAttribute("aria-hidden", "true");
              this.nextElementSibling.style.display = "none";
            } else {
              this.nextElementSibling.setAttribute("aria-hidden", "false");
              this.nextElementSibling.style.display = "block";
            }
          }}
        > */}
        <h2>Recommended ({itemCards.length})</h2>
        {/* </button> */}
        <ul aria-hidden="false">
          {itemCards.map((item) => (
            // console.log(item.card.info)
            <li className="accordion-body">
              <div>
                <h4>{item.card.info.name} </h4>
                <p className="rupees">{item.card.info.price / 100}</p>
                <p>{item.card.info.description}</p>
              </div>
              <img
                className="menu-img"
                src={MENU_IMG + item.card.info.imageId}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
