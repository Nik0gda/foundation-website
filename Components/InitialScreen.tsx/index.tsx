import React from "react";
import ArrowDown from "../ArrrowDown";
import LogoSymbol from "../LogoSymbol";

const InitialScreen = () => {
  return (
    <div className="bg-white h-screen w-screen snap-start">
      <div className="max-w-sm mx-auto pt-28 w-32 md:36">
        <LogoSymbol color="#222226" id="mobileMain" />
      </div>
      <div className="flex space-x-2 font-roboto items-center w-min mx-auto mt-16 ">
        <p className="text-2xl md:text-3xl font-light">Utility</p>
        <p className="text-2xl md:text-3xl font-normal">First</p>
        <p className="text-2xl md:text-3xl font-light">NFT.</p>
      </div>
      <p className="font-roboto font-light text-xl md:text-3xl w-10/12 text-center mx-auto mt-14">
        By holding our NFT you will be able to become the earliest investor in
        the majority of future WEB3 projects / games.
      </p>
      <div className="max-w-sm mx-auto mt-8 w-[50px] animate-bounce animation-delay-5000 ">
        <ArrowDown color="#222226" id="mainArrow" />
      </div>
    </div>
  );
};

export default InitialScreen;
