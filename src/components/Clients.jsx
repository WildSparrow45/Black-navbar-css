"use client";

import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa";

export function BootstrapConnect() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.min.js");
  }, []);
  return null;
}

export function SearchNavButton() {
  function SearchNavButtonHandler() {}

  return (
    <button role="search" onClick={SearchNavButtonHandler}>
      <BiSearch className="Bisearch" fontSize={20} />
    </button>
  );
}

export function Navtooglebutton() {
  function navtooglebuttonHandler() {
    const menu = document.getElementById("custom-menu-nav-id");
    const searchmenu = document.getElementById("custom-nav-search-id");
    menu.classList.toggle("dis-none");
    searchmenu.classList.toggle("dis-none");
  }
  return (
    <button className="" onClick={navtooglebuttonHandler}>
      <FaBars size={20} />
    </button>
  );
}
