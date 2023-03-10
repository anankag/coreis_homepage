import React from "react";
import "./styles.css";
function Section({ title, subTitle }) {
  return (
    <div className="section">
      <div className="section-title">
        <h1>{title}</h1>
      </div>
      <p className="status-text"> {subTitle}</p>
      <div className="section-line">
      </div> 
      <a href="/" className="button-a">
            Դիտել ավելին
          </a>
    </div>
  );
}

export default Section;
