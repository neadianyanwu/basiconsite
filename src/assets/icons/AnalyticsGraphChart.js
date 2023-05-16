import * as React from "react";
const SvgAnalyticsGraphChart = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3v18M21 21H3M7 16l5.25-5.25 3.5 3.5L21 9"
    />
  </svg>
);
export default SvgAnalyticsGraphChart;
