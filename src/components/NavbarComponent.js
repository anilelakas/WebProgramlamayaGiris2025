import React from "react";
import amazonLogo from "../images/amazonLogo.jpeg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Navbar.css";

function NavbarComponent(props) {
  return (
    <div>
      <nav className="nav">
        <div className="logo">
          <img src={amazonLogo} style={{ height: "75px", width: "160px" }} />
        </div>
        <ul className="nav-links">
          <li>
            <a>Ana Sayfa </a>
          </li>
        </ul>
        <ul>
          <li>
            <input type="text" placeholder="Search here" />
          </li>
        </ul>
        <ul className="nav-links">
          <li>
            <a>{props.isim} </a>
          </li>
        </ul>
        <ul className="nav-links">
          <li>
            <a>Adreslerim </a>
          </li>
        </ul>
        <ul className="nav-links">
          <li>
            <a>Siparişlerim </a>
          </li>
        </ul>
        <ul>
          <li>
            <ShoppingCartIcon
              className="cartItem"
              style={{ cursor: "pointer" }}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default NavbarComponent;
