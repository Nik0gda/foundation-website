import React, { RefObject } from "react";
import roadmapJSON from "../../constants/roadmap.json";
import { IRoadmap } from "../../types";

const RoadmapText = ({
  roadmapObjectivesRef,
  currentRoadmapSectionId,
}: {
  roadmapObjectivesRef: RefObject<HTMLDivElement>;
  currentRoadmapSectionId: number;
}) => {
  const roadmapJSONParsed = roadmapJSON as IRoadmap;

  return (
    <div className="flex space-x-5 mt-16 h-80">
      <div className="flex flex-col space-y-3 my-auto w-min ml-10 ">
        {Object.keys(roadmapJSONParsed).map((key) => (
          <span
            key={key}
            className={`block  w-[3px] h-8 ${
              parseInt(key) != currentRoadmapSectionId ? "opacity-30" : ""
            } bg-white transform transition duration-500 ease-in-out`}
          />
        ))}
      </div>
      <div
        className="relative flex flex-col gap-40 my-auto h-80 w-9/12 snap-y snap-mandatory overflow-y-auto scrollbar-hide"
        ref={roadmapObjectivesRef}
      >
        <div>
          <div className="shrink-0 h-60" />
        </div>
        {Object.keys(roadmapJSONParsed).map((key) => (
          <div
            key={key}
            className="snap-always snap-center shrink-0 first:pt-8 last:pb-8"
          >
            {roadmapJSONParsed[parseInt(key)].objectives.map((objective, i) => (
              <p key={i} className="font-roboto font-[350] text-lg">
                {objective}
              </p>
            ))}
          </div>
        ))}
        <div className="shrink-0 h-60" />
      </div>
    </div>
  );
};

export default RoadmapText;
