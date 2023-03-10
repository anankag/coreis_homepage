import React from "react";
import logo from "../../assets/images/logo.png";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <footer className="footer">
      <div className="mainDiv">
        <div className="logo-intro">
          <img className="img-logo" src={logo} alt="logo" ></img>
          <p className="intro-text">
            {" "}
            CORE IS-ը ստոմատոլոգիական գիտելիքների կատարելագործմանն ուղղված
            մասնագիտական ակումբ է, որն իր գաղափարն է ներդնում առօրյա
            ատամնաբուժական գործընթացներում ՝ վերջիններիս ավելի շատ պարզություն և
            կանխատեսելիություն հաղորդելու համար:
          </p>
        </div>
        <div className="footer-about-us">
          <ul className="about-us-ul">
            <h4 className="about-us">Մեր մասին</h4>
            <li className="about-us-li">
              <a href="/">Մեր թիմը</a>
            </li>
            <li className="about-us-li">
              <a href="/">Մեր ակումբի մասին</a>
            </li>
            <li className="about-us-li">
              <a href="/">Ինչպես դառնալ ակումբի անդամ</a>
            </li>
          </ul>

          <ul className="contact-us-ul">
            <h4 className="contact-us">Կապվել մեզ հետ</h4>
            <li className="contact-us-li">
              <a href="/">support@coreis.am</a>
            </li>
            <li className="contact-us-li">
              <a href="/">+37433151151</a>
            </li>
          </ul>
          <ul className="social-media-ul">
            <li className="social-media-li">
              <a href="/">
                <i>
                  <FontAwesomeIcon
                    size="lg"
                    icon={faInstagram}></FontAwesomeIcon>
                </i>
              </a>
            </li>
            <li className="social-media-li">
              <a href="/">
                <i>
                  <FontAwesomeIcon
                    size="lg"
                    icon={faFacebook}></FontAwesomeIcon>
                </i>
              </a>
            </li>
            <li className="social-media-li">
              <a href="/">
                <i>
                  <FontAwesomeIcon size="lg" icon={faUsers}></FontAwesomeIcon>
                </i>
              </a>
            </li>
            <li className="social-media-li">
              <a href="/">
                <i>
                  <FontAwesomeIcon size="lg" icon={faYoutube}></FontAwesomeIcon>
                </i>
              </a>
            </li>
            <li className="social-media-li">
              <a href="/">
                <i>
                  <FontAwesomeIcon
                    size="lg"
                    icon={faLinkedin}></FontAwesomeIcon>
                </i>
              </a>
            </li>
          </ul>
        </div>
        <div className="references">
          <ul className="references-ul">
            <h4 className="references-h4">Օգտակար հղումներ</h4>
            <li className="references-li">
              <a href="/">Ավելացնել կլինիկական քեյս</a>
            </li>
            <li className="references-li">
              <a href="/">Իրադարձություններ</a>
            </li>
            <li className="references-li">
              <a href="/">Հաճախակի տրվող հարցեր</a>
            </li>
          </ul>
        </div>
      </div>
      <h5 className="below-text">
        © 2021 CORE IS – ALL RIGHT RESERVED | P.IVA 02058710993 | PRIVACY POLICY
        | COOKIES POLICY
      </h5>
    </footer>
  );
}

export default Footer;
