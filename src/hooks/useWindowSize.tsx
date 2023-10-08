import { useState, useEffect } from "react";

export interface WindowSizeType {
  width: number | undefined;
  height: number | undefined;
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowSizeType>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function Resize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", Resize);
    Resize();
    return () => window.removeEventListener("resize", Resize);
  }, []);
  return windowSize;
}

export default useWindowSize;
