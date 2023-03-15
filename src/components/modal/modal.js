import React, { useState, useEffect } from "react";
import "./styles.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faPhone } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Modal(props) {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const submit = () => {
    const data = {
      mail,
      password,
    };
    axios
      .post("https://coreis.am/login", data)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <Popup open={props.openModal} modal>
      {(close) => (
        <div className="modal">
          <div className="close-div">
            <a
              className="close"
              onClick={() => {
                close();
                props.isCloseModal();
              }}>
              &times;
            </a>
          </div>
          <div className="sign-in-up">
            <div className="sign-in">
              <a
                id={"1"}
                onClick={props.changeModal}
                className={props.modal1 ? "activeState" : "notActive"}>
                Մուտք գործել
              </a>
            </div>
            <div className="sign-up">
              <a
                id={"2"}
                onClick={props.changeModal}
                className={!props.modal1 ? "activeState" : "notActive"}>
                Գրանցվել
              </a>
            </div>
          </div>

          {props.modal1 ? (
            <div className="content">
              <div className="icon-input">
                <FontAwesomeIcon
                  className="icon"
                  size="lg"
                  icon={faUser}></FontAwesomeIcon>
                <input
                  type="email"
                  className="email"
                  value={mail}
                  onChange={(event) => {
                    setMail(event.target.value);
                    console.log(mail);
                  }}></input>
              </div>
              <div className="icon-input">
                <FontAwesomeIcon
                  className="icon"
                  size="lg"
                  icon={faLock}></FontAwesomeIcon>
                <input
                  type="password"
                  className="password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    console.log(password);
                  }}></input>
              </div>
              <div className="remember-pass">
                <input
                  className="remember-pass-input"
                  type={"checkbox"}></input>
                <p>Հիշել գաղտնաբառը</p>
              </div>
              <div className="actions">
                <div className="log-in">
                  <a onClick={submit}>Մուտք գործել</a>
                </div>
              </div>
              <div className="forget-pass">
                <p> Մոռացել ե՞ք գաղտնաբառը </p>
              </div>
            </div>
          ) : (
            <div className={"content1"}>
              <div className="icon-input">
                <FontAwesomeIcon
                  className="icon"
                  size="lg"
                  icon={faPhone}></FontAwesomeIcon>
                <input
                  className="phone-number"
                  value={number}
                  onChange={(event) => {
                    setNumber(event.target.value);
                    console.log(number);
                  }}></input>
              </div>
              <p className="sms-text">
                Ձեր հեռախոսահամարին կուղարկվի հաստատման SMS կոդ
              </p>
              <div className="actions">
                <div className="log-in">
                  <a
                    onClick={() => {
                      axios
                        .post("https://coreis.am/register-phone", {
                          phone: number,
                        })
                        .then((response) => console.log(response.data))
                        .catch((error) => console.log(error.response));
                    }}>
                    Շարունակել
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </Popup>
  );
}

export default Modal;
