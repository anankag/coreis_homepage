import React, { useState, useEffect } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/images/logo.png";
import Modal from "../modal/modal";

function Header() {

  const [sticky, setSticky] = useState("");

  // on render, set listener
  useEffect(() => {
    console.log("hello");
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 250 ? "is-sticky" : "left-menu";
    setSticky(stickyClass);
    console.log(stickyClass);
  };

  const classes = `header-section d-none d-xl-block ${sticky}`;
  
  const [openModal, setOpenModal] = useState(false);
  const [isModal1, setIsModal1] = useState(false);
  const isCloseModal = () => {
    setIsModal1(false);
    setOpenModal(false);
  };

  const changeModal = () => {
    if (isModal1) {
      setIsModal1(false);
    } else {
      setIsModal1(true);
    }
  };
  return (
    <header className="header">
      <div className="header-icons">
        <ul className="icons-ul">
          <li className="facebook">
            <a className="facebook" href="/">
              <i className="icon-i">
                <FontAwesomeIcon size="lg" icon={faFacebook}></FontAwesomeIcon>
              </i>
            </a>
          </li>
          <li className="instagram">
            <a className="instagram" href="/">
              <i className="icon-i">
                <FontAwesomeIcon size="lg" icon={faInstagram}></FontAwesomeIcon>{" "}
              </i>
            </a>
          </li>
          <li className="youtube">
            <a className="youtube" href="/">
              <i className="icon-i">
                <FontAwesomeIcon size="lg" icon={faYoutube}></FontAwesomeIcon>
              </i>
            </a>
          </li>
          <li className="linkedin">
            <a className="linkedin" href="/">
              <i className="icon-i">
                <FontAwesomeIcon size="lg" icon={faLinkedin}></FontAwesomeIcon>
              </i>
            </a>
          </li>
        </ul>
      </div>
      <div className="left-menu" >
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
              <div className="dropdown-content">
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
              <div className="dropdown-content">
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
              <div className="dropdown-content">
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
            <div className="dropdown-content">
              <ul className="dropdown-menu-ul">
                <li>
                  <a
                    onClick={() => {
                      setIsModal1(true);
                      setOpenModal(true);
                    }}>
                    Մուտք
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      setIsModal1(false);
                      setOpenModal(true);
                    }}>
                    Գրանցվել
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <Modal
        modal1={isModal1}
        isCloseModal={isCloseModal}
        openModal={openModal}
        changeModal={changeModal}
      />
    </header>
  );
}

export default Header;
