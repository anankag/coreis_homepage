import React from "react";
import "/Users/anna/coreis-homepage/src/header/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/images/logo.png"

export function Header() {
  return (
    <header className="header">
      <div className="header-icons">
        <ul className="icons-ul">
          <li className="facebook">
            <a className="facebook" href="#">
              <i class="icon-i"> </i>
              <FontAwesomeIcon size="lg" icon={faFacebook}></FontAwesomeIcon>
            </a>
          </li>
          <li className="instagram">
            <a className="instagram" href="#">
              <i class="icon-i"> </i>
              <FontAwesomeIcon size="lg" icon={faInstagram}></FontAwesomeIcon>
            </a>
          </li>
          <li className="youtube">
            <a className="youtube" href="#">
              <i class="icon-i"> </i>
              <FontAwesomeIcon size="lg" icon={faYoutube}></FontAwesomeIcon>
            </a>
          </li>
          <li className="linkedin">
            <a className="linkedin" href="#">
              <i class="icon-i"> </i>
              <FontAwesomeIcon size="lg" icon={faLinkedin}></FontAwesomeIcon>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <a href="#"> <img className="logo" src={logo} /></a>
      </div>
    </header>
  );
}

export default Header;
