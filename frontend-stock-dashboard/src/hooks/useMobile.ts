import { useState, useEffect, useCallback } from "react";

const useMobile = (breakpoint?: number | undefined): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= breakpoint ?? 768);
  },[breakpoint]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint, handleResize]);

  return isMobile;
};

export default useMobile;
