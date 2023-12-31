import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 180 179.51" {...props}>
      <defs>
        <linearGradient
          id="prefix__a"
          x1={202.93}
          y1={544.7}
          x2={203.8}
          y2={545.57}
          gradientTransform="matrix(180 0 0 -179.51 -36456 98005.23)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#00aee9" />
          <stop offset={1} stopColor="#69fabd" />
        </linearGradient>
      </defs>
      <path
        d="M201.17 60a38.81 38.81 0 00-38.84 38.71v42.92c-4 .27-8.09.44-12.33.44s-8.31.17-12.33.41V98.71a38.84 38.84 0 00-77.67 0v102.58a38.84 38.84 0 0077.67 0v-42.92c4-.27 8.09-.44 12.33-.44s8.31-.17 12.33-.41v43.77a38.84 38.84 0 0077.67 0V98.71A38.81 38.81 0 00201.17 60zM98.83 75.86a22.91 22.91 0 0122.92 22.85v45.45a130.64 130.64 0 00-33 9.33 60 60 0 00-12.8 7.64V98.71a22.91 22.91 0 0122.88-22.85zm22.92 125.43a22.92 22.92 0 11-45.84 0V191c0-9.09 7.2-17.7 19.27-23.06a113 113 0 0126.57-7.77v41.12zm79.42 22.85a22.91 22.91 0 01-22.92-22.85v-45.45a130.64 130.64 0 0033-9.33 60 60 0 0012.8-7.64v62.42a22.91 22.91 0 01-22.88 22.85zm3.65-92.14a113 113 0 01-26.57 7.77V98.71a22.92 22.92 0 1145.84 0V109c0 9.05-7.2 17.66-19.27 23z"
        transform="translate(-60 -60)"
        fill="url(#prefix__a)"
      />
    </Svg>
  );
};

export default Icon;
