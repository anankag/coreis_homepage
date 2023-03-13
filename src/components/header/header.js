import React, { useState } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo.png";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Header() {
  const hiddenStyle = {
      display: "none",
  }
  const ShowStyle = {
    display: "block",
}
  const [active, setActive] = useState("1");
  const changeActive = (event) => {
    setActive(event.target.id);
  };

  return (
    <header className="header">
      <div className="header-icons">
        <ul className="icons-ul">
          <li className="facebook">
            <a className="facebook" href="/">
              <i class="icon-i">
                <FontAwesomeIcon size="lg" icon={faFacebook}></FontAwesomeIcon>
              </i>
            </a>
          </li>
          <li className="instagram">
            <a className="instagram" href="/">
              <i class="icon-i">
                <FontAwesomeIcon size="lg" icon={faInstagram}></FontAwesomeIcon>{" "}
              </i>
            </a>
          </li>
          <li className="youtube">
            <a className="youtube" href="/">
              <i class="icon-i">
                <FontAwesomeIcon size="lg" icon={faYoutube}></FontAwesomeIcon>
              </i>
            </a>
          </li>
          <li className="linkedin">
            <a className="linkedin" href="/">
              <i class="icon-i">
                <FontAwesomeIcon size="lg" icon={faLinkedin}></FontAwesomeIcon>
              </i>
            </a>
          </li>
        </ul>
      </div>
      <div className="left-menu">
        <div className="d-flex">
          <a className="logo" href="/">
            <img className="logo" src={logo} alt="logo" />
          </a>
          <ul className="header-menu-ul">
            <li className="header-menu-li">
              <a className="menu-items-a" href="/">
                Հոդվածներ
              </a>
            </li>
            <li className="header-menu-li">
              <a className="menu-items-a" href="/">
                Կլինիկական Քեյսեր
              </a>
            </li>
            <li className="header-menu-li">
              <a className="menu-items-a" href="/">
                Դասընթացներ
              </a>
              <div class="dropdown-content">
                <ul className="dropdown-menu-ul">
                  <li>
                    <a href="/">Վեբինարներ</a>
                  </li>
                  <li>
                    <a href="/">Սեմինար</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="header-menu-li">
              <a className="menu-items-a" href="/">
                Պացիենտների համար
              </a>
              <div class="dropdown-content">
                <ul className="dropdown-menu-ul">
                  <li>
                    <a href="/">Իրադարձություններ</a>
                  </li>
                  <li>
                    <a href="/">Տեղեկություններ</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="header-menu-li">
              <a className="menu-items-a" href="/">
                Մեր Ակումբը
              </a>
              <div class="dropdown-content">
                <ul className="dropdown-menu-ul">
                  <li>
                    <a href="/">Մեր Մասին</a>
                  </li>
                  <li>
                    <a href="/">Խումբը Facebook-ում</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <ul className="menu-last-item">
          <li className="menu-last-item-li">
            <a className="menu-last-item-a" href="/">
              Մուտք
            </a>
            <div class="dropdown-content">
              <ul className="dropdown-menu-ul">
                <li>
                  <Popup
                  id="one"
                    onOpen={() => setActive("1")}
                    trigger={<a>Մուտք</a>}
                    modal
                    nested>
                    {(close) => (
                      <div className="modal">
                        <div className="close-div">
                          <a className="close" onClick={close}>
                            &times;
                          </a>
                        </div>
                        <div className="sign-in-up">
                          <div className="sign-in">
                            <a
                              id={"1"}
                              onClick={changeActive}
                              className={
                                active === "1" ? "activeState" : "notActive"
                              }>
                              Մուտք գործել
                            </a>
                          </div>
                          <div className="sign-up">
                            <a 
                              id={"2"}
                              onClick={() => {
                                changeActive()}}
                              className={
                                active === "2" ? "activeState" : "notActive"
                              }>
                              Գրանցվել
                            </a>
                          </div>
                        </div>
                        <div className="content">
                          <div className="icon-input">
                            <FontAwesomeIcon
                              className="icon"
                              size="lg"
                              icon={faUser}></FontAwesomeIcon>
                            <input type="email" className="email"></input>
                          </div>
                          <div className="icon-input">
                            <FontAwesomeIcon
                              className="icon"
                              size="lg"
                              icon={faLock}></FontAwesomeIcon>
                            <input type="password" className="password"></input>
                          </div>
                        </div>
                        <div className="remember-pass">
                          <input
                            className="remember-pass-input"
                            type={"checkbox"}></input>
                          <p>Հիշել գաղտնաբառը</p>
                        </div>
                        <div className="actions">
                          <div className="log-in">
                            <a>Մուտք գործել</a>
                          </div>
                        </div>
                        <div className="forget-pass">
                          <p> Մոռացել ե՞ք գաղտնաբառը </p>
                        </div>
                      </div>
                    )}
                  </Popup>
                </li>
                <li>
                  <Popup
                    id="two"
                    onOpen={() => setActive("2")}
                    trigger={<a>Գրանցվել</a>}
                    modal>
                    {(close) => (
                      <div className="modal1">
                        <div className="close-div">
                          <a className="close" onClick={close}>
                            &times;
                          </a>
                        </div>
                        <div className="sign-in-up">
                          <div className="sign-in">
                            <a
                              key={1}
                              id={"1"}
                              onClick={changeActive}
                              className={
                                active === "1" ? "activeState" : "notActive"
                              }>
                              Մուտք գործել
                            </a>
                          </div>
                          <div className="sign-up">
                            <a
                              key={2}
                              id={"2"}
                              onClick={changeActive}
                              className={
                                active === "2" ? "activeState" : "notActive"
                              }>
                              Գրանցվել{" "}
                            </a>
                          </div>
                        </div>
                        <div className="content">
                          <div className="icon-input">
                            <FontAwesomeIcon
                              className="icon"
                              size="lg"
                              icon={faLock}></FontAwesomeIcon>
                            <input type="" className="phone-number"></input>
                          </div>
                          <p className="sms-text">
                            Ձեր հեռախոսահամարին կուղարկվի հաստատման SMS կոդ
                          </p>
                        </div>
                        <div className="actions">
                          <div className="log-in">
                            <a>Շարունակել</a>
                          </div>
                        </div>
                      </div>
                    )}
                  </Popup>
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
