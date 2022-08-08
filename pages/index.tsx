import type { NextPage } from "next";
import Head from "../Components/HeadComponents/Head";
import { useRef, useState } from "react";
import { navColor } from "../types";
import NavMenu from "../Components/Nav/NavMenu";
import MobileNav from "../Components/Nav";
import Utility from "../Components/Utility";

import FullRoadmap from "../Components/Roadmap/Full";

import FullInitialScreen from "../Components/InitialScreen.tsx/Full";
import FullTeam from "../Components/Team/Full";
import MobileInitialScreen from "../Components/InitialScreen.tsx/Mobile";

import MobileRoadmap from "../Components/Roadmap/Mobile";
import MobileTeam from "../Components/Team/Mobile";

const Home: NextPage = () => {
  const [navColor, setNavColor] = useState<navColor>("black");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const scrollRefFull = useRef<HTMLDivElement>(null);
  const utilityRefFull = useRef<HTMLDivElement>(null);
  const teamRefFull = useRef<HTMLDivElement>(null);
  const roadmapRefFull = useRef<HTMLDivElement>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const utilityRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const roadmapRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Head />
      <div className="hidden md:block" ref={scrollRefFull}>
        <FullInitialScreen
          utilityRef={utilityRefFull}
          teamRef={teamRefFull}
          roadmapRef={roadmapRefFull}
        />
        <Utility utilityRef={utilityRefFull} />
        <FullTeam teamRef={teamRefFull} />
        <FullRoadmap roadmapRef={roadmapRefFull} scrollRef={scrollRefFull} />
      </div>
      <div className="md:hidden overflow-y-hidden">
        <NavMenu
          navColor={navColor}
          isNavOpen={isNavOpen}
          setIsNavOpen={setIsNavOpen}
          utilityRef={utilityRef}
          teamRef={teamRef}
          roadmapRef={roadmapRef}
        />
        <div
          className="snap-y snap-mandatory h-screen w-screen overflow-y-auto"
          ref={scrollRef}
        >
          <MobileNav
            navColor={navColor}
            isNavOpen={isNavOpen}
            setIsNavOpen={setIsNavOpen}
            setNavColor={setNavColor}
            teamRef={teamRef}
            scrollRef={scrollRef}
          />

          <MobileInitialScreen />
          <Utility utilityRef={utilityRef} />
          <MobileTeam teamRef={teamRef} />
          <MobileRoadmap roadmapRef={roadmapRef} />
        </div>
      </div>
    </>
  );
};

export default Home;
