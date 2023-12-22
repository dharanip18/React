import { LOGO_IMG } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [loginBtnText, setLoginBtnText] = useState("Login");

  return (
    <header>
      <div className="container">
        <img className="logo" src={LOGO_IMG} />

        <ul className="nav-items">
          <li>About</li>
          <li>Contact US</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              loginBtnText === "Login"
                ? setLoginBtnText("Logout")
                : setLoginBtnText("Login");
            }}
          >
            {loginBtnText}
          </button>
        </ul>
      </div>
    </header>
  );
};

export default Header;
