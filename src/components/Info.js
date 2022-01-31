import React from "react";
import heroPhoto from "../images/photo.jpg";
import emailIcon from "../images/email-icon.svg";
import socialIcon from "../images/li-icon.svg";

export default function Info() {
  return (
    <header className="header">
      <img
        src={heroPhoto}
        alt="Portrait of Jason Heys"
        className="header__hero"
      />
      <h1 className="header__title">Jason Heys</h1>
      <h2 className="header__subtitle">Front-end Web Developer</h2>
      <p className="header__website">jasonheys.com.au</p>
      <div className="header__buttons">
        <a
          href="mailto:jasonheys@outlook.com.au"
          className="button button--white"
        >
          <img src={emailIcon} aria-hidden="true" className="button--icon" />
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/heyitsgany/"
          target="_blank"
          className="button button--blue"
        >
          <img src={socialIcon} aria-hidden="true" className="button--icon" />
          LinkedIn
        </a>
      </div>
    </header>
  );
}
