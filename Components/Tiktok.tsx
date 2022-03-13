import * as React from "react";

const Tiktok = ({ color, id }: { color: string; id: string }) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <style>{`#${id}{fill:${color}}`}</style>
    </defs>
    <path
      d="M34.145 0h-8.09v32.696c0 3.895-3.11 7.095-6.982 7.095-3.872 0-6.984-3.2-6.984-7.095 0-3.826 3.043-6.957 6.776-7.096v-8.209C10.637 17.531 4 24.278 4 32.696 4 41.183 10.776 48 19.142 48s15.141-6.887 15.141-15.304V15.93A18.732 18.732 0 0 0 45 19.548v-8.209C38.916 11.13 34.145 6.122 34.145 0Z"
      id={id}
    />
  </svg>
);

export default Tiktok;
