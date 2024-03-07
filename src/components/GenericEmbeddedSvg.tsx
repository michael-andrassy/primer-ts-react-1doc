import React from "react";

export interface EmbeddedSvgProps {
  className?: string;
  width?: string;
  height?: string;
}

interface GenericEmbeddedSvgProps extends EmbeddedSvgProps {
  SvgComponent: React.ElementType;
}

const GenericEmbeddedSvg: React.FC<GenericEmbeddedSvgProps> = ({
  className,
  width,
  height,
  SvgComponent,
}: GenericEmbeddedSvgProps) => {
  const combinedClassName = `inline-svg-container ${className}`.trim();
  return (
    <div className={combinedClassName} style={{ width: width, height: height }}>
      <SvgComponent />
    </div>
  );
};

export default GenericEmbeddedSvg;
