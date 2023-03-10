import React from "react";
import "./styles.css";
import partner1 from "../../assets/images/partner1.png";
import partner2 from "../../assets/images/partner2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

function Partners() {
  return (
    <div id="partnersSwiper">
      <h1>ՄԵՐ ԳՈՐԾԸՆԿԵՐՆԵՐԸ</h1>
      <div className="slider-wrapper">
      <div className="arrow-prev">   <FontAwesomeIcon
                    size="lg"
                    icon={faChevronLeft}></FontAwesomeIcon></div>
        <div className="slider-img">
          <img src={partner1} alt="partner"/>
        </div>
        <div className="slider-img" >
          <img src={partner2} alt="partner"/>
        </div>
        <div className="slider-img" >
          <img src={partner1} alt="partner"/>
        </div>
        <div className="slider-img" alt="partner">
          <img src={partner2} alt="partner"/>
        </div>
       <div className="arrow-next"> <FontAwesomeIcon
                    size="lg"
                    icon={faChevronRight}></FontAwesomeIcon></div>
                     </div>
    
    </div>
  );
}
export default Partners;
