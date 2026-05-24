import React from "react";

interface Props {
  size?: number;
  className?: string;
  color?: string;
}

const LinkedInIcon: React.FC<Props> = ({ size = 24, className, color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    className={className}
  >
    <circle cx="4.5" cy="4.5" r="2.5" />
    <rect x="2" y="9" width="5" height="13" />
    <path d="M9 9h5v1.8C14.7 9.7 15.9 9 17.5 9 20 9 22 10.8 22 14.5V22h-5v-7c0-1.7-.7-2.5-2-2.5s-2 .8-2 2.5v7H9V9z" />
  </svg>
);

export default LinkedInIcon;
