import React, { useState, useEffect } from "react";
import {
  TOTAL_SCREENS,
  GET_SCREEN_INDEX,
} from "../../../utilities/commonUtils";
import ScrollService from "../../../utilities/ScrollService";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

export default function Header() {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);

  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) return;

    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
    if (screenIndex < 0) return;
  };
  let currentScreenSubscription =
    ScrollService.currentScreenBroadcaster.subscribe(updateCurrentScreen);

  const getHeaderOptions = () => {
    return TOTAL_SCREENS.map((Screen, i) => (
      <div
        key={Screen.screen_name}
        className={getHeaderOptionsClasses(i)}
        onClick={() => switchScreen(i, Screen)}
      >
        <span>{Screen.screen_name}</span>
      </div>
    ));
  };

  const getHeaderOptionsClasses = (index) => {
    let classes = "header-option ";
    if (index < TOTAL_SCREENS.length - 1) classes += "header-option-seperator ";

    if (selectedScreen === index) classes += "selected-header-option ";

    return classes;
  };

  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementById(screen.screen_name);
    if (!screenComponent) return;

    screenComponent.scrollIntoView({ behavior: "smooth" });
    setSelectedScreen(index);
    setShowHeaderOptions(false);
  };

  useEffect(() => {
    return () => {
      currentScreenSubscription.unsubscribe();
    };
  }, [currentScreenSubscription]);

  return (
    <div className="header-container">
      <div className="header-parent">
        <div
          id="header-hamburger"
          className="header-hamburger"
          onClick={() => {
            let rotate = document.getElementById("header-hamburger-cross");
            rotate.setAttribute("class", "header-hamburger-cross");
            let rotate2 = document.getElementById("header-hamburger");
            rotate2.setAttribute("class", "header-hamburger rotateIt");
            setShowHeaderOptions(!showHeaderOptions);
          }}
        >
          <FontAwesomeIcon className="header-hamburger-bars" icon={faBars} />
        </div>
        <div className="header-logo">
          <span>NIRBHAY</span>
        </div>
        <div
          className={
            showHeaderOptions
              ? "header-options show-hamburger-options"
              : "header-options"
          }
        >
          <div
            id="header-hamburger-cross"
            className="header-hamburger-cross"
            onClick={() => {
              let rotate = document.getElementById("header-hamburger-cross");
              rotate.setAttribute("class", "header-hamburger-cross rotateIt");
              let rotate2 = document.getElementById("header-hamburger");
              rotate2.setAttribute("class", "header-hamburger");
              setShowHeaderOptions(!showHeaderOptions);
            }}
          >
            <FontAwesomeIcon className="header-hamburger-bars" icon={faTimes} />
          </div>
          {getHeaderOptions()}
        </div>
      </div>
    </div>
  );
}
