import React, { Dispatch, RefObject, SetStateAction } from "react";
import { navColor } from "../../types";
import Discord from "../Discord";
import NavElement from "./NavElement";
import Tiktok from "../Tiktok";
import Twitter from "../Twitter";

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
  return (
    <div id="mobile-navbar">
      <div
        className={`transform transition duration-500 ease-in-out h-screen w-screen ${
          isNavOpen ? "opacity-1" : "opacity-0 invisible"
        }  ${
          isNavOpen ? "overflow-y-hidden" : ""
        } z-10 fixed bg-${navColor} bg-opacity-25 backdrop-blur-[38px] `}
      >
        <div className="mt-32 grid grid-cols-1 gap-4">
          <NavElement
            scrollTo={utilityRef}
            text="Utility"
            setIsNavOpen={setIsNavOpen}
          />
          <NavElement
            scrollTo={teamRef}
            text="Team"
            setIsNavOpen={setIsNavOpen}
          />
          <NavElement
            scrollTo={roadmapRef}
            text="Roadmap"
            setIsNavOpen={setIsNavOpen}
          />
        </div>

        <div className="mt-36 grid grid-cols-1 gap-4">
          <NavElement
            text="Twitter"
            Logo={<Twitter color="#1DA1F2" id="twitter-nav" />}
            setIsNavOpen={setIsNavOpen}
          />
          <NavElement
            text="Discord"
            Logo={<Discord color="#5865F2" id="discord-nav" />}
            setIsNavOpen={setIsNavOpen}
          />

          <NavElement
            text="Tiktok"
            Logo={<Tiktok color="#222226" id="titkok-nav" />}
            setIsNavOpen={setIsNavOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
