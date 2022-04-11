import React, {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { navColor } from "../../types";
import LogoSymbol from "../LogoSymbol";

const MobileNav = ({
  navColor,
  isNavOpen,
  setIsNavOpen,
  setNavColor,
  teamRef,
  scrollRef,
}: {
  navColor: navColor;
  isNavOpen: boolean;
  setIsNavOpen: Dispatch<SetStateAction<boolean>>;
  setNavColor: Dispatch<SetStateAction<navColor>>;
  teamRef: RefObject<HTMLDivElement>;
  scrollRef: RefObject<HTMLDivElement>;
}) => {
  const [windowHeight, setWindowHeight] = useState(global.innerHeight);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(global.innerHeight);
    };

    const handleScroll = () => {
      if (!scrollRef.current) return;
      const { scrollTop: scrollTopWindow } = scrollRef.current;
      setScrollY(scrollTopWindow);
    };

    if (scrollRef)
      if (scrollRef.current)
        scrollRef.current.addEventListener("scroll", handleScroll);

    global.addEventListener("resize", handleResize);
  }, [scrollRef]);

  useEffect(() => {
    if (!teamRef.current) return;
    if (scrollY > teamRef.current.offsetTop - (global.innerHeight / 4) * 3)
      setNavColor("white");
    else setNavColor("black");
  }, [scrollY, teamRef, setNavColor]);

  return (
    <nav
      className={`md:hidden fixed flex justify-between w-screen pt-10 ${
        !isNavOpen ? "pb-20" : ""
      } px-10 z-20 ${
        scrollY > windowHeight / 3 && !isNavOpen
          ? navColor == "black"
            ? "bg-gradient-to-b from-white via-white"
            : ""
          : ""
      } `}
    >
      <div
        className={`w-10 transform transition duration-200 ease-in-out ${
          scrollY > windowHeight / 3 || isNavOpen ? "opacity-1" : "opacity-0"
        }`}
      >
        <LogoSymbol
          color={navColor == "white" ? "#f4f4f4" : "#222226"}
          id="navbarLogo"
        />
      </div>
      <button
        onClick={() => setIsNavOpen(!isNavOpen)}
        className="h-min my-auto"
      >
        <div className="space-y-2">
          <span
            className={`block w-6 h-0.5 bg-${navColor} transform transition duration-500 ease-in-out ${
              isNavOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-${navColor} transform transition duration-500 ease-in-out ${
              isNavOpen ? "-rotate-45 -translate-y-1" : ""
            }`}
          />
        </div>
      </button>
    </nav>
  );
};

export default MobileNav;
