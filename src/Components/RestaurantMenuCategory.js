import { useState } from "react";
import MenuItems from "./MenuItems";

const RestaurantMenuCategory = ({ data, showItems, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);
  console.log("SI", showItems);
  const handleClick = () => {
    //setShowItems(!showItems);
    setShowIndex();
  };
  return (
    <div className="max-w-7xl mx-auto border-b-8 border-gray-200 py-4">
      <h1
        className="font-bold mb-2 flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        {data.title}({data.itemCards.length})
      </h1>
      {showItems && <MenuItems items={data.itemCards} />}
    </div>
  );
};

export default RestaurantMenuCategory;
