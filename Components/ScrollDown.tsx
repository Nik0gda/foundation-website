import * as React from "react";

const ScrollDown = () => {
  const style = {};
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="wheel"
        d="M24 20V14"
        stroke="#222226"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36 30V18C36 11.3726 30.6274 6 24 6C17.3726 6 12 11.3726 12 18V30C12 36.6274 17.3726 42 24 42C30.6274 42 36 36.6274 36 30Z"
        stroke="#222226"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default ScrollDown;
