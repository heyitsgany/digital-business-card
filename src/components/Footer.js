import React from "react";
import twitterIcon from "../images/twitter-icon.svg";
import facebookIcon from "../images/facebook-icon.svg";
import instaIcon from "../images/insta-icon.svg";
import gitHubIcon from "../images/github-icon.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__links">
        <li>
          <a href="https://twitter.com/HeyItsGany" target="_blank">
            <img src={twitterIcon} alt="" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/heyitsgany" target="_blank">
            <img src={instaIcon} alt="" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a href="https://github.com/heyitsgany" target="_blank">
            <img src={gitHubIcon} alt="" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
