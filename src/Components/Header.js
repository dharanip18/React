import { LOGO_IMG } from "../utils/constants";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img className="logo" src={LOGO_IMG} />

        <ul className="nav-items">
          <li>About</li>
          <li>Contact US</li>
          <li>Cart</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
