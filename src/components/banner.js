import React from "react";
import "../assets/css/banner.css";
import trofii from "../assets/images/trofii.png";
import Logo2 from "../assets/images/logo2-.png";
import logo1 from "../assets/images/logo1.png";
import logo2 from "../assets/images/logo2.png";
import logo3 from "../assets/images/logo3.png";
import Foot1 from "../assets/images/koora 1.png";
import Foot2 from "../assets/images/logowhite 1.png";
function Banner() {
  return (
    <div className="container-fluid">
      <div className="banner_txt">
        <h1>Sphera World</h1>
        <p>Collectibles, Redefined for the Digital Era</p>
        <div className="flex_area">
          <div>
            <div className="border_color">
              <span>Up to $30,000 in Prizes!</span>
              <p>
                Win up to $30,000 in prizes, just claim your sphera head to be
                entered!
              </p>
            </div>

            <div className="join_com">
              <h3>Join our Community:</h3>
              <img src={logo1} className="icons" />
              <img src={logo2} className="icons" />
              <img src={logo3} className="icons" />
            </div>
          </div>

          <div className="right_text">
            <img src={Logo2} />
            <h3>Get Early Access To The Sphera Platform</h3>
            <p>
              Sphera World revolutionizes the way you collect, connecting you
              with the world of sports like never before. Get early access to
              the sphera platform with the free Sphera Head access NFT .
            </p>
            <button>Claim your SpheraHead</button>
            <br />
            <div className="footer_logo">
              <div>
                <h6>Powered by</h6>
                <img src={Foot1} />
              </div>
              <div>
                <h6>Enabled by</h6>
                <img src={Foot2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
