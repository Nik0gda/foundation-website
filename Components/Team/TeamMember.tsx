import Image from "next/image";
import React from "react";
import teamMembers from "../../constants/teamMembers.json";
import { ITeamMembers } from "../../types";

const TeamMember = ({ id }: { id: number }) => {
  const { name, position, imageSrc, imageWidth, imageHeight } = (
    teamMembers as ITeamMembers
  )[id];
  return (
    <div className="snap-always snap-center shrink-0 first:pl-8 last:pr-8 flex flex-col ">
      <div className="w-[180px] h-[270px]">
        <Image
          width={imageWidth}
          height={imageHeight}
          className="shrink-0 object-cover rounded-lg shadow-xl"
          src={imageSrc}
          alt={`${name} - ${position}`}
        />
      </div>
      <p className="text-white w-max mx-auto text-3xl font-[350] mt-3">
        {name}
      </p>
      <p className="text-white w-max mx-auto text-xl font-thin mt-4">
        {position}
      </p>
    </div>
  );
};

export default TeamMember;
