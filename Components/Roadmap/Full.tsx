import React, { RefObject, useEffect, useState } from "react";

import { IRoadmap } from "../../types";
import roadmapJSON from "../../constants/roadmap.json";
const FullInitialScreen = ({
  scrollRef,
  roadmapRef,
}: {
  scrollRef: RefObject<HTMLDivElement>;
  roadmapRef: RefObject<HTMLDivElement>;
}) => {
  const roadmapJSONParsed = roadmapJSON as IRoadmap;

  const [currentRoadmapSectionId, setCurrentRoadmapSectionId] = useState(0);
  const [roadmapOpacity, setRoadmapOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!roadmapRef.current) return;
      const unit = roadmapRef.current.scrollHeight / 3;
      const roadmapOffset = roadmapRef.current.offsetTop;

      const calc = (global.scrollY - roadmapOffset) / unit;
      const decimal = calc % 1;
      const wholePart = Math.floor(calc) < 0 ? 0 : Math.floor(calc);

      const index = decimal <= 0.5 ? wholePart : wholePart + 1;

      if (decimal < 0.3 || decimal > 0.7) setRoadmapOpacity(1);
      else if (decimal >= 0.3 && decimal < 0.5)
        setRoadmapOpacity(1 - (decimal - 0.3) * 5);
      else if (decimal >= 0.5 && decimal <= 0.7)
        setRoadmapOpacity((decimal - 0.5) * 5);

      setCurrentRoadmapSectionId(Number.isInteger(index) ? index : 0);
    };
    if (roadmapRef.current) global.addEventListener("scroll", handleScroll);
  }, [roadmapRef]);

  const scrollToSection = (id: number) => {
    if (!scrollRef.current || !roadmapRef.current) return;
    const unit = roadmapRef.current.scrollHeight / 3;
    const windowHeight = scrollRef.current?.offsetHeight - global.innerHeight;

    global.scrollTo({ top: windowHeight + id * unit - unit * 2 });
  };

  return (
    <div
      className="bg-black min-h-[300vh] w-full font-roboto text-white pt-[20vh]"
      ref={roadmapRef}
    >
      <div className="sticky top-[20vh]">
        <div className="w-max ml-52 text-right ">
          <p className="text-7xl font-bold">Roadmap</p>
          <p className="text-5xl font-normal pt-5">
            {roadmapJSONParsed[currentRoadmapSectionId].timeFrame}
          </p>
        </div>
        <div className="flex space-x-10 items-center mt-20 ml-32 h-60">
          <div className="flex flex-col space-y-3 my-auto w-min">
            {Object.keys(roadmapJSONParsed).map((key) => (
              <span
                key={key}
                className={`block w-1 h-10 ${
                  parseInt(key) != currentRoadmapSectionId ? "opacity-30" : ""
                } bg-white transform transition duration-500 ease-in-out cursor-pointer`}
                onClick={() => {
                  scrollToSection(parseInt(key));
                }}
              />
            ))}
          </div>
          <div
            className={`md:w-[50ch] lg:w-[65ch] my-auto`}
            style={{
              opacity: Number.isInteger(roadmapOpacity)
                ? roadmapOpacity
                : roadmapOpacity.toFixed(2).toString().substring(1),
            }}
          >
            {roadmapJSONParsed[currentRoadmapSectionId].objectives.map(
              (objective, i) => (
                <p key={i} className="font-roboto font-[350] text-xl">
                  {objective}
                </p>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullInitialScreen;
