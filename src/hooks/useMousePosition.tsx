import React, { useState } from "react";

type StateType = {
  x: number;
  y: number;
};

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<StateType>({
    x: 0,
    y: 0,
  });
  React.useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return mousePosition;
};
export default useMousePosition;
