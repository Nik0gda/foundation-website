import React, { Dispatch, RefObject, SetStateAction } from "react";
import { navColor } from "../../types";
import Discord from "../Discord";
import NavElement from "./NavElement";
import Tiktok from "../Tiktok";
import Twitter from "../Twitter";
import {
  DISCORD_LINK,
  TIKTOK_LINK,
  TWITTER_LINK,
} from "../../constants/constants";

const NavMenu = ({
  navColor,
  isNavOpen,
  setIsNavOpen,
  utilityRef,
  teamRef,
  roadmapRef,
}: {
  navColor: navColor;
  isNavOpen: boolean;
  setIsNavOpen: Dispatch<SetStateAction<boolean>>;
  utilityRef: RefObject<HTMLDivElement>;
  teamRef: RefObject<HTMLDivElement>;
  roadmapRef: RefObject<HTMLDivElement>;
}) => {
  const bgColor = navColor == "white" ? "black" : "white";
  const classes = isNavOpen
    ? "opacity-1 overflow-y-hidden"
    : "opacity-0 invisible";
  const tiktokColor = navColor == "black" ? "#222226" : "#f4f4f4";
  return (
    <div id="mobile-navbar">
      <div
        className={`transform transition duration-500 ease-in-out h-screen w-screen ${classes} z-10 fixed  bg-${bgColor}  text-${navColor} `}
      >
        <div className="mt-32 grid grid-cols-1 gap-4">
          <NavElement
            scrollTo={utilityRef}
            text="Utility"
            setIsNavOpen={setIsNavOpen}
            borderColor={navColor}
          />
          <NavElement
            scrollTo={teamRef}
            text="Team"
            setIsNavOpen={setIsNavOpen}
            borderColor={navColor}
          />
          <NavElement
            scrollTo={roadmapRef}
            text="Roadmap"
            setIsNavOpen={setIsNavOpen}
            borderColor={navColor}
          />
        </div>

        <div className="mt-36 grid grid-cols-1 gap-5">
          <NavElement
            text="Twitter"
            Logo={<Twitter color="#1DA1F2" id="twitter-nav" />}
            setIsNavOpen={setIsNavOpen}
            href={TWITTER_LINK}
            borderColor={navColor}
          />
          <NavElement
            text="Discord"
            Logo={<Discord color="#5865F2" id="discord-nav" />}
            setIsNavOpen={setIsNavOpen}
            href={DISCORD_LINK}
            borderColor={navColor}
          />

          <NavElement
            text="Tiktok"
            Logo={<Tiktok color={tiktokColor} id="titkok-nav" />}
            setIsNavOpen={setIsNavOpen}
            href={TIKTOK_LINK}
            borderColor={navColor}
          />
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
