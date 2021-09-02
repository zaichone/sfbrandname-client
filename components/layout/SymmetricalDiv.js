import React, { useState, useLayoutEffect, useRef } from "react";

const SymmetricalDiv = ({ style, children, ...props }) => {
  const [diamStyle, setDiamStyle] = useState({});
  const elementRef = useRef(null);
  style = style ? Object.assign({}, diamStyle, style) : diamStyle;

  useLayoutEffect(() => {
    const width = elementRef.current.clientWidth;
    const height = elementRef.current.clientHeight;
    const diam = Math.max(width, height);
    setDiamStyle({ width: diam, height: diam });
  }, [children]);

  return (
    <div ref={elementRef} {...props} style={style}>
      {children}
    </div>
  );
};

export default SymmetricalDiv;
