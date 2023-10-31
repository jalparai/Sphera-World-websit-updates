import React from "react";
import "../assets/css/section.css";
import card from "../assets/images/cards.png";
import icon1 from "../assets/images/Frame.png";
import icon2 from "../assets/images/Vector.png";
import icon3 from "../assets/images/Frame-1.png";
import info from "../assets/images/info.png";
import line from "../assets/images/line.png";
import vector from "../assets/images/subject.png";
import Player from "../assets/images/player.png";
import Line2 from "../assets/images/pngline.png";
function Sections() {
  return (
    <div className="sec2">
      <img className="line" src={line} alt="" />
      <img src={card} className="card_img" />
      <div className="to_flex">
        <div className="threesec">
          <div>
            {" "}
            <img src={icon1} />
            <p>Unique PFP and exclusive badge on KOOORAs forum</p>
          </div>
          <div>
            {" "}
            <img src={icon2} />
            <p>Closed community access on Discord</p>
          </div>
        </div>
        <div className="threesec1" id="shadow1">
          <h1>SpheraHeads</h1>
          <h3>Your Digital Adventure Begins.</h3>
          <button>Claim Your SpheraHead</button>

          <div>
            {" "}
            <img src={icon3} />
            <p>Whitelist on future NFT collections</p>
          </div>
          <div className="new_flex">
            <img src={info} alt="" />
            <a href="#">Learn more</a>
          </div>
        </div>
        <div className="threesec">
          <div>
            {" "}
            <img src={icon3} />
            <p>Access to special events and meetups</p>
          </div>
          <div>
            {" "}
            <img src={icon3} />
            <p>Raffle entries for Sphera Tokens and other rewards</p>
          </div>
        </div>
      </div>

      <div className="section_3">
        <p>
          Are you a passionate Football enthusiast? It's time to take your love
          for sports collectibles to the next level with SpheraHeads. Join the
          digital revolution, own unique collectibles, and be part of an
          exciting community of sports fans. Start your journey and claim your
          free SpheraHead today!
        </p>
      </div>

      <div className="step_flex">
        <div className="auto_margin">
          <div className="steps">
            <span>1.</span>
            <span className="line_span"></span>
            <span>Get Your SpheraHead</span>
          </div>
          <p className="step_p">
            Think of your SpheraHead as your passport to the digital realm of
            collectibles. It's your digital identity, your ticket to the game.
          </p>
        </div>

        <div className="auto_margin">
          <div className="steps">
            <span>2.</span>
            <span className="line_span"></span>
            <span>Explore the Marketplace</span>
          </div>
          <p className="step_p">
            Dive into our marketplace, where you'll discover an array of digital
            sports treasures. From trading cards to iconic moments, it's all
            here
          </p>
        </div>
      </div>

      <div className="step_flex">
        <div className="auto_margin">
          <div className="steps">
            <span>3.</span>
            <span className="line_span"></span>
            <span>Collect and Trade</span>
          </div>
          <p className="step_p">
            Buy, sell, and trade your favorite collectibles. It's like having a
            piece of sports history in your pocket.
          </p>
        </div>

        <div className="auto_margin">
          <div className="steps">
            <span>4.</span>
            <span className="line_span"></span>
            <span>Connect with Others</span>
          </div>
          <p className="step_p">
            Join a vibrant community of sports enthusiasts who share your
            passion. Discuss, trade, and celebrate sports together.{" "}
          </p>
        </div>
      </div>
      <div className="section3 container">
        <div>
          <img src={vector} alt="" />
        </div>
        <div>
          <h3>Sphera Moments™</h3>
          <p>
            Step into the future of collectibles with Sphera Moments.
            <br /> Don't miss out on owning iconic sports highlights,
            <br /> legendary plays, and more.
          </p>
          <div className="btn_flex">
            <button>Coming Soon...</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sections;
