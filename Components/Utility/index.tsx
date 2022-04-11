import React, { RefObject } from "react";
import UtilityJSON from "../../constants/utility.json";
import { IUtility } from "../../types";

const Utility = ({ utilityRef }: { utilityRef: RefObject<HTMLDivElement> }) => {
  const { why, solution } = UtilityJSON as IUtility;
  return (
    <div className="bg-white snap-start min-h-screen w-full" ref={utilityRef}>
      <br className="md:invisible" />
      <p className="w-max mx-auto text-4xl mt-28 md:mt-40">Why?</p>
      <p className="font-roboto font-light text-xl md:text-2xl w-9/12 md:w-[50ch] lg:w-[55ch] mx-auto mt-12 md:mt-24">
        {why}
      </p>

      <p className="w-max mx-auto mt-20 md:mt-32 text-4xl">Solution</p>
      <p className="font-roboto font-light text-xl md:text-2xl w-9/12 md:w-[50ch] lg:w-[55ch] mx-auto mt-12 md:mt-24 pb-52">
        {solution}
      </p>
    </div>
  );
};

export default Utility;
