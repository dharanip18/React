import { render } from "react-dom";
import { LOGO_IMG } from "../utils/constants";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtnText, setLoginBtnText] = useState("Login");

  // if no dependancy array => useEffect is called on every render
  // if dependancy array is empty = [] => useEffect is called on initial render(just once)
  // if dependancy array is [loginBtnText] => called everytime [loginBtnText] is updated
  useEffect(() => {
    console.log("useEffect called");
  }, [loginBtnText]);

  const onlineStatus = useOnlineStatus();

  return (
    <header className="shadow">
      <div className="container flex max-w-7xl mx-auto items-center justify-between">
        <div>
          <Link to="/">
            <img className="logo w-56" src={LOGO_IMG} />
          </Link>
        </div>

        <ul className="nav-items flex items-center">
          <li className="px-5">{onlineStatus ? "Online" : "Offline"}</li>
          <li className="px-5">
            <Link to="About">About</Link>
          </li>
          <li className="px-5">
            <Link to="/contact">Contact US</Link>
          </li>
          <li className="px-5">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-5">Cart</li>
          <button
            className="login bg-lime-500 rounded-sm p-4 text-white"
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
