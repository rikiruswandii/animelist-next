import * as React from "react";
import { Svg, Path } from "react-svg";

export function IconTransitionTop(props) {
  return (
    <Svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <Path stroke="none" d="M0 0h24v24H0z" />
      <Path d="M21 6a3 3 0 00-3-3H6a3 3 0 00-3 3M6 21h12a3 3 0 000-6H6a3 3 0 000 6zM12 15V7M9 10l3-3 3 3" />
    </Svg>
  )
}
