import * as React from "react";
const SvgNotificationBellAlarm = ({ title, titleId, ...props }) => (
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
      d="M5.6 9.458V8.4a6.4 6.4 0 0 1 12.8 0v1.058c0 2.3.665 4.552 1.915 6.483L21 17H3l.685-1.06A11.933 11.933 0 0 0 5.6 9.459ZM11 20.889v0a1.345 1.345 0 0 0 2 0v0"
    />
  </svg>
);
export default SvgNotificationBellAlarm;
