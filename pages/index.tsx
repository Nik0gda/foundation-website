import type { NextPage } from "next";
import Head from "../Components/HeadComponents/Head";
import { useRef, useState } from "react";
import { navColor } from "../types";
import NavMenu from "../Components/MobileNav/NavMenu";
import MobileNav from "../Components/MobileNav";
import InitialScreen from "../Components/InitialScreen.tsx";
import Utility from "../Components/Utility";
import Team from "../Components/Team";
import Roadmap from "../Components/Roadmap";

const Home: NextPage = () => {
  const [navColor, setNavColor] = useState<navColor>("black");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const utilityRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const roadmapRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Head />
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

        <InitialScreen />
        <Utility utilityRef={utilityRef} />
        <Team teamRef={teamRef} />
        <Roadmap roadmapRef={roadmapRef} />
      </div>
    </>
  );
};

export default Home;
