import React, { Dispatch, MutableRefObject, SetStateAction } from "react";

const NavElement = ({
  text,
  scrollTo,
  setIsNavOpen,
  Logo,
}: {
  text: string;
  scrollTo?: MutableRefObject<any>;
  setIsNavOpen: Dispatch<SetStateAction<boolean>>;
  Logo?: JSX.Element;
}) => {
  return (
    <div
      className="ml-10"
      onClick={() => {
        if (scrollTo) {
          scrollTo.current.scrollIntoView();
        }
        setIsNavOpen(false);
      }}
    >
      <div className="flex justify-between w-10/12">
        <p className="font-roboto font-light text-[26px]">{text}</p>
        {Logo ? Logo : ""}
      </div>
      <span className={`block w-10/12  h-[1px] bg-black`} />
    </div>
  );
};

export default NavElement;
