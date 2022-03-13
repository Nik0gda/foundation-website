import * as React from "react";

const LogoSymbol = ({ color, id }: { color: string; id: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 277.52"
    className="transform transition duration-200"
  >
    <defs>
      <style>{`#${id}{fill:${color}}`}</style>
    </defs>

    <g id="Layer_1-2" data-name="Layer 1">
      <path
        id={id}
        d="M197.21 0H0v25h57.89c12.76 0 17 3.7 20.6 11 3.4 6.78 5.15 18.06 5.21 33.53.08 21.17 3.55 29.12 8.09 37.32l.79 1.44h30.89l-4.53-4.72c-6.88-7.17-10.22-18.31-10.22-34 0-15-.94-30.78-7.75-44.51h74v116.35H0v36.83c0 54.76 44.87 99.28 100 99.28S200 233 200 178.24V0ZM100 252.5a74.87 74.87 0 0 1-53.08-21.73A73.46 73.46 0 0 1 25 178.24v-11.81h150v11.85a73.5 73.5 0 0 1-21.91 52.5A74.83 74.83 0 0 1 100 252.5Z"
      />
      <path id={id} d="M43.16 83.44h2.79V58.43H0V83.44h43.16z" />
    </g>
  </svg>
);

export default LogoSymbol;
