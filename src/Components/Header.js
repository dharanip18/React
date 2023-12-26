import { render } from "react-dom";
import { LOGO_IMG } from "../utils/constants";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const Header = () => {
  const [loginBtnText, setLoginBtnText] = useState("Login");

  // if no dependancy array => useEffect is called on every render
  // if dependancy array is empty = [] => useEffect is called on initial render(just once)
  // if dependancy array is [loginBtnText] => called everytime [loginBtnText] is updated
  useEffect(() => {
    console.log("useEffect called");
  }, [loginBtnText]);

  return (
    <header>
      <div className="container">
        <div>
          <Link to="/">
            <img className="logo" src={LOGO_IMG} />
          </Link>
        </div>

        <ul className="nav-items">
          <li>
            <Link to="About">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact US</Link>
          </li>
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
