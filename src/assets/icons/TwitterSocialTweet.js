import * as React from "react";
const SvgTwitterSocialTweet = ({ title, titleId, ...props }) => (
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
      d="M8.288 21c7.544 0 11.672-6.546 11.672-12.212 0-.184 0-.369-.008-.553A8.823 8.823 0 0 0 22 6.017a8.055 8.055 0 0 1-2.36.678 4.262 4.262 0 0 0 1.8-2.377 7.858 7.858 0 0 1-2.608 1.038c-1.552-1.733-4.152-1.816-5.808-.184-1.064 1.046-1.52 2.611-1.184 4.101-3.288-.176-6.368-1.808-8.448-4.486-1.088 1.958-.536 4.47 1.272 5.725A3.886 3.886 0 0 1 2.8 9.976v.05c0 2.043 1.376 3.8 3.296 4.21-.608.177-1.24.202-1.856.076.536 1.75 2.08 2.947 3.832 2.98a8.01 8.01 0 0 1-5.096 1.841c-.328 0-.656-.025-.976-.058A11.236 11.236 0 0 0 8.288 21Z"
    />
  </svg>
);
export default SvgTwitterSocialTweet;
