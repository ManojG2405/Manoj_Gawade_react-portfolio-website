import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkdin.com" rel="noreferrer" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://www.github.com" rel="noreferrer" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.dribbble.com" rel="noreferrer" target="_blank">
        <BsDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
