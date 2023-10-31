import React from "react";
import "../assets/css/section.css";
import "../assets/css/section2.css";
import line from "../assets/images/line.png";
import vector from "../assets/images/subject.png";
import Player from "../assets/images/player.png";
import Line2 from "../assets/images/pngline.png";
import CardSection from "./card";
import Responsive from "./partnres";
import CardSlider3 from "./partnres";


function Section2() {
  return (
    <div className="relative_p">
      
      <img src={Line2} alt="" className="line2" />
 <div className="sec_4">
        <div className="sec4_flex">
          <div className="sec4_text">
            <h3>Sphera World Marketplace</h3>
            <h5>Collect. Connect. Thrive.</h5>
            <div className="ul_sec">
              <p>
                Explore and purchase digital collectibles, memorabilia, and
                exclusive <br /> experiences from athletes  and sports entities
              </p>
              <ul>
                <li>Center of Sphera World ecosystem</li>
                <li>NFT trading platform</li>
                <li>Fueled by $Sphera Tokens</li>
              </ul>

              <button>
                <svg
                  width="48"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width="48" height="48" rx="24" fill="white" />
                  <path
                    d="M15.0059 24.5L32.0512 24.5"
                    stroke="#FF7F2A"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M26.0352 19.5L32.0512 24.5L26.0352 29.5"
                    stroke="#FF7F2A"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Slide to go to the marketplace
              </button>
            </div>
          </div>

          <div className="sec4_img">
            <img src={Player} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="bg-dark new_sectio">
      <CardSection />
<CardSlider3 />
      </div>
    </div>
  );
}

export default Section2;
