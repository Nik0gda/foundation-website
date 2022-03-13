import React, { RefObject } from "react";
import UtilityJSON from "../../constants/utility.json";
import { IUtility } from "../../types";

const Utility = ({ utilityRef }: { utilityRef: RefObject<HTMLDivElement> }) => {
  const { why, solution } = UtilityJSON as IUtility;
  return (
    <div className="bg-white snap-start min-h-screen" ref={utilityRef}>
      <br />
      <p className="w-max mx-auto text-4xl md:text-3xl mt-28">Why?</p>
      <p className="font-roboto font-light text-xl md:text-3xl w-9/12  mx-auto mt-12">
        {why}
      </p>

      <p className="w-max mx-auto mt-20 text-4xl md:text-3xl">Solution</p>
      <p className="font-roboto font-light text-xl md:text-3xl w-9/12  mx-auto mt-12 pb-52">
        {solution}
      </p>
    </div>
  );
};

export default Utility;
