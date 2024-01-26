import { useState, useEffect } from "react";

const useScrollDirection = () => {
  const [scrollDir, setScrollDir] = useState("up");

  useEffect(() => {
    let previousScrollYPosition = window.scrollY;

    const handleScroll = () => {
      const currentScrollYPosition = window.scrollY;

      if (currentScrollYPosition > previousScrollYPosition) {
        setScrollDir("down");
        console.log("down");
      } else {
        setScrollDir("up");
        console.log("up");
      }

      previousScrollYPosition = currentScrollYPosition;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollDir;
};

export default useScrollDirection;
