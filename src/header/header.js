import React from "react";
import "/Users/anna/coreis-homepage/src/header/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/images/logo.png";

function Header() {
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
      <div className="left-menu">
        <div className="d-flex"> 
        <a className="logo" href="#">
          <img className="logo" src={logo} />
        </a>
        <ul className="header-menu-ul">
          <li className="header-menu-li">
            <a className="menu-items-a" href="#">
              Հոդվածներ
            </a>
          </li>
          <li className="header-menu-li">
            <a className="menu-items-a" href="#">
              Կլինիկական Քեյսեր
            </a>
          </li>
          <li className="header-menu-li">
            <a className="menu-items-a" href="#">
              Դասընթացներ
            </a>
            <div class="dropdown-content">
              <ul className="dropdown-menu-ul">
                <li>
                  <a href="#">Վեբինարներ</a>
                </li>
                <li>
                  <a href="#">Սեմինար</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="header-menu-li">
            <a className="menu-items-a" href="#">
              Պացիենտների համար
            </a>
            <div class="dropdown-content">
              <ul className="dropdown-menu-ul">
                <li>
                  <a href="#">Իրադարձություններ</a>
                </li>
                <li>
                  <a href="#">Տեղեկություններ</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="header-menu-li">
            <a className="menu-items-a" href="#">
              Մեր Ակումբը
            </a> 
             <div class="dropdown-content">
              <ul className="dropdown-menu-ul">
                <li>
                  <a href="#">Մեր Մասին</a>
                </li>
                <li>
                  <a href="#">Խումբը Facebook-ում</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        </div>
        <ul className="menu-last-item">
          <li className="menu-last-item-li">
            <a className="menu-last-item-a" href="#">
              Մուտք
            </a>
            <div class="dropdown-content">
              <ul className="dropdown-menu-ul">
                <li>
                  <a href="#">Մուտք</a>
                </li>
                <li>
                  <a href="#">Գրանցվել</a>

                  
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
