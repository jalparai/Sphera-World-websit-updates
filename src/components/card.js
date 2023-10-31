import React from "react";
import "../assets/css/cardsec.css";
import info from "../assets/images/info.png";
import logo1 from "../assets/images/logo1.png";
import logo2 from "../assets/images/logo2.png";
import logo3 from "../assets/images/logo3.png";
import Cards from "../assets/images/Group55397.png";
import icon1 from "../assets/images/cards.png";
import icon2 from "../assets/images/icon7.png";
import icon3 from "../assets/images/icon8.png";
import icon4 from "../assets/images/icon9.png";
import Partners from "./partnres";

function CardSection() {
  return (
    <di className="card_div">
      <div className="main_divcard">
        <h1>Join the Sphera World</h1>
        <p>
          <img src={info} className="info_icon" />
          The INO packages provide customized SpheraHead NFTs, Sphera tokens,
          Jersey NFTs, fee-free access, VIP services, discounts, & exclusive
          opportunities to win signed jerseys, international match tickets, and
          meet and greet opportunities. These rewards enhance the experience
          forinvestors who show their commitmentto the Sphera ecosystem.
        </p>
        <div className="share_icons">
          <img src={logo1} />
          <img src={logo2} />
          <img src={logo3} />
        </div>
        <div className="card_imgs">
          <img src={Cards} alt="" />
          <button>Visit Headstarter</button>
        </div>

        <div className="icon_box">
          <div>
            <img className="icon_img" src={icon1} alt="" />
            <h3>SpheraHead NFTs</h3>
            <p>
              Limited edition "Genesis" digital sports collectibles, that has
              Web2 & Web3 utilities. Total 10,000 NFTS - 5,000 Free Airdrop and
              5,000 sold as a "Genesis" collection.
            </p>
            <button>
              {" "}
              <img src={info} /> Learn
            </button>
          </div>
          <div>
            <img className="icon_img" src={icon2} alt="" />
            <h3>Sphera Tokens</h3>
            <p>
              Sphera token is the native token that fuelsthe SW ecosystem and
              its value increasesthrough the platform's different use casesand
              revenue streams
            </p>
            <button>
              {" "}
              <img src={info} /> Learn
            </button>
          </div>
          <div>
            <img className="icon_img" src={icon4} alt="" />
            <h3>Sphera Jerseys NFTs</h3>
            <p>
              Cross-collaboration NFT collections for players and clubs as
              collectibles with custom utilities.
            </p>
            <h5> Coming soon</h5>
          </div>
          <div>
            <img className="icon_img" src={icon3} alt="" />
            <h3>Sphera Moments</h3>
            <p>
              Unique digital collectible trading cards of different players,
              teams and iconic legendary moments.
            </p>
            <h5> Coming soon</h5>
          </div>
        </div>
      </div>
    </di>
  );
}

export default CardSection;
