import React from "react";

import GenericEmbeddedSvg from "./GenericEmbeddedSvg";
import { EmbeddedSvgProps } from "./GenericEmbeddedSvg";

//1. select your svg-file
import InnerSVG from "@assets/atom.svg?react";
//2. rename component
const ProjectLogo: React.FC<EmbeddedSvgProps> = ({
  className,
  width,
  height,
}: EmbeddedSvgProps) => {
  return (
    <GenericEmbeddedSvg
      className={className}
      width={width}
      height={height}
      SvgComponent={InnerSVG}
    />
  );
};
//3. export your renamed component
export default ProjectLogo;
