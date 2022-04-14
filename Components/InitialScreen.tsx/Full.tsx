import React, { RefObject, useEffect, useState } from "react";
import ScrollDown from "../ScrollDown";
import LogoSymbol from "../LogoSymbol";
import Tiktok from "../Tiktok";
import Twitter from "../Twitter";
import Discord from "../Discord";
import LogoBlack from "../LogoBlack";
import LogoWhite from "../LogoWhite";
import { navColor } from "../../types";
import {
  BLACK_COLOR,
  TIKTOK_LINK,
  TWITTER_LINK,
  WHITE_COLOR,
} from "../../constants/constants";

const FullInitialScreen = ({
  utilityRef,
  teamRef,
  roadmapRef,
}: {
  utilityRef: RefObject<HTMLDivElement>;
  teamRef: RefObject<HTMLDivElement>;
  roadmapRef: RefObject<HTMLDivElement>;
}) => {
  const [socialsColor, setSocialsColor] = useState<navColor>("white");
  const [navColor, setNavColor] = useState<navColor>("white");
  const [navLogoColor, setNavLogoColor] = useState<navColor>("black");

  const socialsColorCode = socialsColor == "white" ? WHITE_COLOR : BLACK_COLOR;
  const navColorStyle = navColor == "white" ? "text-white" : "text-black";
  const navLogoColorCode = navLogoColor == "white" ? "#f4f4f4" : "#222226";

  useEffect(() => {
    const handleScroll = () => {
      // Fixed elements' color
      if (!utilityRef.current) return;
      const windowHeight = global.innerHeight;
      const positionY = global.scrollY;
      const utilityHeight = utilityRef.current.scrollHeight;
      const navPaddingTop = 48; // 3rem - 48px

      if (
        positionY > windowHeight * 0.5 &&
        positionY < windowHeight * 0.5 + utilityHeight
      )
        setSocialsColor("black");
      else setSocialsColor("white");

      if (
        positionY > windowHeight - navPaddingTop &&
        positionY < windowHeight - navPaddingTop + utilityHeight
      )
        setNavColor("black");
      else setNavColor("white");

      if (positionY > windowHeight - navPaddingTop + utilityHeight)
        setNavLogoColor("white");
      else setNavLogoColor("black");
    };
    global.addEventListener("scroll", handleScroll);
  }, [utilityRef]);
  return (
    <div className="bg-white h-screen w-full">
      <div className="bg-black h-screen w-1/2 right-0 absolute" />
      <div className="flex pt-12 pl-28 fixed w-full md:px-20 lg:px-36 z-10">
        <div className="w-10">
          <LogoSymbol color={navLogoColorCode} id="nav" />
        </div>
        <div className="w-3/4" />
        <div
          className={`flex font-roboto text-xl items-center gap-x-10 ${navColorStyle}`}
        >
          <p
            className="cursor-pointer"
            onClick={() => {
              utilityRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Utility
          </p>
          <p
            className="cursor-pointer"
            onClick={() => {
              teamRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Team
          </p>
          <p
            className="cursor-pointer"
            onClick={() => {
              roadmapRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Roadmap
          </p>
        </div>
      </div>
      <div className="absolute pl-36 bottom-12">
        <ScrollDown />
      </div>

      <div className="flex justify-center absolute  top-[60%] gap-x-20  w-full">
        <div
          className={`flex space-x-2 font-roboto items-center justify-center w-72 text-black`}
        >
          <p className="text-2xl md:text-3xl font-light">Utility</p>
          <p className="text-2xl md:text-3xl font-normal">First</p>
          <p className="text-2xl md:text-3xl font-light">NFT.</p>
        </div>
        <div className="font-roboto font-light text-white text-center w-72 text-xl">
          <p>
            By holding our NFT you will be able to become the earliest investor
            in the majority of future WEB3 projects / games.
          </p>
        </div>
      </div>
      <div className="absolute flex top-[25%] w-full">
        <div className="flex mx-auto gap-x-7 w-6/12 ">
          <div className="w-6/12">
            <LogoBlack />
          </div>
          <div className="w-6/12">
            <LogoWhite />
          </div>
        </div>
      </div>
      <div className="fixed flex h-screen right-0 w-min md:mr-6 lg:mr-12 xl:mr-20 z-10">
        <div className="flex my-auto flex-col gap-y-8 ">
          <a href={TWITTER_LINK} target={"_blank"} rel="noreferrer">
            <Twitter color={socialsColorCode} id="twitter-nav-full" />{" "}
          </a>
          <a>
            <Discord color={socialsColorCode} id="discord-nav-full" />
          </a>
          <a href={TIKTOK_LINK} target="_blank" rel="noreferrer">
            <Tiktok color={socialsColorCode} id="tiktok-nav-full" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FullInitialScreen;
