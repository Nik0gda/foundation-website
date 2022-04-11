import React, { Dispatch, MutableRefObject, SetStateAction } from "react";
import { navColor } from "../../types";

const NavElement = ({
  text,
  scrollTo,
  setIsNavOpen,
  Logo,
  href,
  borderColor,
}: {
  text: string;
  scrollTo?: MutableRefObject<any>;
  setIsNavOpen: Dispatch<SetStateAction<boolean>>;
  Logo?: JSX.Element;
  href?: string;
  borderColor: navColor;
}) => {
  return (
    <div
      className={`mx-auto w-9/12 border-b border-${borderColor} border-opacity-10`}
      onClick={() => {
        if (scrollTo) {
          scrollTo.current.scrollIntoView();
          setIsNavOpen(false);
        }
      }}
    >
      <a
        href={href ? href : undefined}
        target={href ? "_blank" : undefined}
        rel="noreferrer"
      >
        <div className="flex justify-between ">
          <p className="font-roboto text-[26px] font-normal">{text}</p>
          {Logo ? Logo : ""}
        </div>
        {/* <span className={`block w-10/12  h-[1px] bg-black`} /> */}
      </a>
    </div>
  );
};

export default NavElement;
