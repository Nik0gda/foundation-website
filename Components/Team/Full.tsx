import React, { RefObject, useState } from "react";

import teamMembersJSON from "../../constants/teamMembers.json";
import { ITeamMembers, navColor } from "../../types";
import TeamMember from "./TeamMember";

const FullTeam = ({ teamRef }: { teamRef: RefObject<HTMLDivElement> }) => {
  const teamMembersJSONParsed = teamMembersJSON as ITeamMembers;

  const [currentMemberId, setCurrentMemberId] = useState(-1);

  return (
    <div className="bg-black min-h-screen w-full" ref={teamRef}>
      <p className="text-white w-max mx-auto md:text-4xl lg:text-5xl md:pt-32 lg:pt-44 font-thin ">
        Team
      </p>
      <div className="flex md:gap-x-6 lg:gap-x-6 xl:gap-x-16 2xl:gap-x-24 w-min pt-24 mx-auto justify-around ">
        {Object.keys(teamMembersJSONParsed).map((value) => {
          const onMouseEnter = () => {
            setCurrentMemberId(parseInt(value));
          };

          const styles =
            currentMemberId == parseInt(value) || currentMemberId == -1
              ? "opacity-100"
              : "opacity-30";
          return (
            <div className={styles + " transition duration-300"} key={value}>
              <TeamMember id={parseInt(value)} onMouseEnter={onMouseEnter} />
            </div>
          );
        })}
      </div>
      <p className="font-roboto text-white font-light md:text-xl lg:text-2xl w-[45ch] mx-auto mt-12 text-center h-32">
        {currentMemberId >= 0
          ? teamMembersJSONParsed[currentMemberId].description
          : ""}
      </p>
    </div>
  );
};

export default FullTeam;
