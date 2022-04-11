import Image from "next/image";
import React from "react";
import teamMembers from "../../constants/teamMembers.json";
import { ITeamMembers } from "../../types";

const TeamMember = ({
  id,
  onMouseEnter,
  onMouseLeave,
}: {
  id: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) => {
  const { name, position, imageSrc, imageWidth, imageHeight } = (
    teamMembers as ITeamMembers
  )[id];
  return (
    <div
      className="snap-always snap-center shrink-0 first:ml-8 last:mr-8 md:first:mx-0 flex flex-col "
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="md:w-[140px] md:h-[210px] w-[180px] h-[270px] lg:w-[180px] lg:h-[270px]">
        <Image
          width={imageWidth}
          height={imageHeight}
          className="shrink-0 object-cover rounded-lg shadow-xl"
          src={imageSrc}
          alt={`${name} - ${position}`}
        />
      </div>
      <p className="text-white w-max mx-auto sm:lg:text-3xl md:text-2xl font-[350] mt-3">
        {name}
      </p>
      <p className="text-white w-max mx-auto sm:lg:text-xl md:text-base font-thin sm:lg:mt-4 md:mt-2">
        {position}
      </p>
    </div>
  );
};

export default TeamMember;
