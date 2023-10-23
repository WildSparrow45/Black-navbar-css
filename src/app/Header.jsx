"use client";

import React from "react";
import "../Scss/Header.scss";

import { SearchNavButton, Navtooglebutton } from "../components/Clients.jsx";

function Header() {
  return (
    <nav className="custom-main-nav">
      <div className="custom-brand">
        <h1>Learn Next</h1>
      </div>
      <div className="custom-nav-toogle-button">
        <Navtooglebutton />
      </div>
      <div className="custom-menu-nav dis-none" id="custom-menu-nav-id">
        <a href="">Home </a>
        <a href="">About </a>
        <a href="">Service </a>
        <a href="">Contact </a>
        <a href="">Sign In </a>
        <a href="">Sign Up</a>
      </div>
      <div className="custom-nav-search dis-none " id="custom-nav-search-id">
        <input type="text" name="" id="" />
        <SearchNavButton />
      </div>
    </nav>
  );
}

export default Header;
