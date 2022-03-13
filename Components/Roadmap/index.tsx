import React, { RefObject, useEffect, useRef, useState } from "react";
import { IRoadmap, ITeamMembers } from "../../types";
import roadmapJSON from "../../constants/roadmap.json";
import RoadmapText from "./RoadmapText";

const Roadmap = ({ roadmapRef }: { roadmapRef: RefObject<HTMLDivElement> }) => {
  const [scrollYRoadmap, setScrollYRoadmap] = useState(0);
  const [currentRoadmapSectionId, setCurrentRoadmapSectionId] = useState(1);
  const roadmapObjectivesRef = useRef<HTMLDivElement>(null);

  const roadmapJSONParsed = roadmapJSON as IRoadmap;

  useEffect(() => {
    const handleScrollRoadmap = () => {
      if (!roadmapObjectivesRef.current) return;
      const { scrollTop: scrollTopTeam } = roadmapObjectivesRef.current;
      setScrollYRoadmap(scrollTopTeam);
    };

    if (roadmapObjectivesRef)
      if (roadmapObjectivesRef.current)
        roadmapObjectivesRef.current.addEventListener(
          "scroll",
          handleScrollRoadmap
        );
  }, []);

  //  It's a miracle it works
  //        Rationale behind the approach
  //
  //          offsetTop scrollTop (of parent element)
  //    div1  400       310
  //    div2  700       680
  //    div3  1140      1078
  //
  useEffect(() => {
    if (!roadmapObjectivesRef.current) return;
    const { childNodes: roadmapChildren, scrollTop: roadmapScrollTop } =
      roadmapObjectivesRef.current;

    const offsets = [];
    for (let i = 1; i < roadmapChildren.length - 1; i++) {
      const child = roadmapChildren[i] as HTMLDivElement;
      offsets.push(child.offsetTop);
    }

    let closest = offsets.reduce((prev, curr) => {
      return Math.abs(curr - roadmapScrollTop) <
        Math.abs(prev - roadmapScrollTop)
        ? curr
        : prev;
    });

    setCurrentRoadmapSectionId(offsets.indexOf(closest));
  }, [scrollYRoadmap]);

  return (
    <div
      className="bg-black snap-start min-h-screen text-white"
      ref={roadmapRef}
    >
      <br />
      <div className="w-max ml-auto mr-16 text-right">
        <p className="text-[50px] leading-[60px] md:text-3xl mt-28 font-bold">
          Roadmap
        </p>
        <p className="text-[32px] md:text-3xl font-normal">
          {roadmapJSONParsed[currentRoadmapSectionId].timeFrame}
        </p>
      </div>
      <RoadmapText
        roadmapObjectivesRef={roadmapObjectivesRef}
        currentRoadmapSectionId={currentRoadmapSectionId}
      />
    </div>
  );
};

export default Roadmap;
