export interface ITeamMember {
  name: string;
  position: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  description: string;
}

export interface ITeamMembers {
  [id: number]: ITeamMember;
}

export interface IRoadmapElement {
  timeFrame: string;
  objectives: string[];
}

export interface IRoadmap {
  [id: number]: IRoadmapElement;
}

export interface IUtility {
  why: string;
  solution: string;
}

export type navColor = "white" | "black";
