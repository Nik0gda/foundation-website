import React, { RefObject, useEffect, useRef, useState } from "react";
import { ITeamMembers } from "../../types";
import teamMembersJSON from "../../constants/teamMembers.json";
import TeamMember from "./TeamMember";
import {
  SCROLL_X_MAGIC_NUMBER,
  TEAM_MEMBERS_COUNT,
} from "../../constants/constants";

const Team = ({ teamRef }: { teamRef: RefObject<HTMLDivElement> }) => {
  const [scrollXTeam, setScrollXTeam] = useState(0);
  const [currentMemberId, setCurrentMemberId] = useState(0);
  const teamMembersRef = useRef<HTMLDivElement>(null);
  const teamMemberRef = useRef<HTMLDivElement>(null);
  const teamGapRef = useRef<HTMLDivElement>(null);

  const teamMembersJSONParsed = teamMembersJSON as ITeamMembers;
  useEffect(() => {
    const handleScrollTeam = () => {
      if (!teamMembersRef.current) return;
      const { scrollLeft: scrollLeftTeam } = teamMembersRef.current;
      setScrollXTeam(scrollLeftTeam);
    };
    if (teamMembersRef)
      if (teamMembersRef.current)
        teamMembersRef.current.addEventListener("scroll", handleScrollTeam);
  }, []);

  useEffect(() => {
    if (!teamMemberRef.current || !teamGapRef.current) return;
    const { offsetLeft, scrollWidth } = teamMemberRef.current;
    const value = Math.round(
      (scrollXTeam -
        offsetLeft / scrollWidth -
        teamGapRef.current.clientWidth +
        SCROLL_X_MAGIC_NUMBER) /
        scrollWidth
    );
    setCurrentMemberId(
      value < 0
        ? 0
        : value > TEAM_MEMBERS_COUNT - 1
        ? TEAM_MEMBERS_COUNT - 1
        : value
    );
  }, [scrollXTeam]);

  return (
    <div className="bg-black snap-start min-h-screen text-white" ref={teamRef}>
      <br />
      <p className="text-white w-max mx-auto text-4xl md:text-3xl mt-28 font-[350]">
        Team
      </p>
      <div
        className="relative w-full flex gap-16 snap-x snap-mandatory overflow-x-auto pt-14 pb-5 ml-1/2 scrollbar-hide"
        ref={teamMembersRef}
      >
        <div className="shrink-0" ref={teamGapRef}>
          <div className="shrink-0 w-60"></div>
        </div>
        <div ref={teamMemberRef}>
          <TeamMember id={0} />
        </div>
        <TeamMember id={1} />
        <TeamMember id={2} />
        <TeamMember id={3} />
        <div className="shrink-0">
          <div className="shrink-0 w-60"></div>
        </div>
      </div>
      <div className="flex space-x-3 w-min mt-3 mx-auto">
        {Object.keys(teamMembersJSONParsed).map((key) => (
          <span
            key={key}
            className={`block w-7 h-0.5 ${
              parseInt(key) != currentMemberId ? "opacity-30" : ""
            } bg-white transform transition duration-500 ease-in-out`}
          />
        ))}
      </div>
      <p className="font-roboto font-light text-base md:text-md w-9/12  mx-auto mt-12 text-center pb-52">
        {teamMembersJSONParsed[currentMemberId].description}
      </p>
    </div>
  );
};

export default Team;
