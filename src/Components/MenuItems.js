import { MENU_IMG } from "../utils/constants";

const MenuItems = ({ items }) => {
  // console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between border-b-2 p-6"
        >
          <div className="">
            <h3>{item.card.info.name}</h3>
            <p>{item.card.info.price / 100}</p>
            <p>{item.card.info.description}</p>
          </div>
          <img
            className="rounded-sm object-cover h-24 w-36"
            src={MENU_IMG + item.card.info.imageId}
          />
        </div>
      ))}
    </div>
  );
};
export default MenuItems;
