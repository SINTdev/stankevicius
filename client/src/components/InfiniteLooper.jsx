import React, { useCallback, useEffect, useRef, useState } from "react";
import "./InfiniteLooper.css";

const InfiniteLooper = function InfiniteLooper({ speed, direction, children }) {
  const isMobile = window.innerWidth < 768;
  speed = isMobile ? speed * .8 : speed;
  const [looperInstances, setLooperInstances] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const orientation =
    direction === "up" || direction === "down" ? "vertical" : "horizontal";

  function resetAnimation() {
    if (innerRef?.current) {
      innerRef.current.setAttribute("data-animate", "false");

      setTimeout(() => {
        if (innerRef?.current) {
          innerRef.current.setAttribute("data-animate", "true");
        }
      }, 10);
    }
  }

  const setupInstances = useCallback(() => {
    if (!innerRef?.current || !outerRef?.current) return;

    const { width, height } = innerRef.current.getBoundingClientRect();

    const { width: parentWidth, height: parentHeight } =
      outerRef.current.getBoundingClientRect();

    if (orientation === "vertical") {
      const heightDeficit = parentHeight - height;

      const instanceHeight = height / innerRef.current.children.length;

      if (heightDeficit) {
        setLooperInstances(
          looperInstances + Math.ceil(heightDeficit / instanceHeight) + 1
        );
      }
    } else {
      const widthDeficit = parentWidth - width;

      const instanceWidth = width / innerRef.current.children.length;
      if (widthDeficit) {
        setLooperInstances(
          looperInstances + Math.ceil(widthDeficit / instanceWidth) + 1
        );
      }
    }

    resetAnimation();
  }, [looperInstances, orientation]);

  const handleMouseEnter = () => {
    setIsPaused(true); // Pause animation on hover
  };

  const handleMouseLeave = () => {
    setIsPaused(false); // Resume animation when leaving hover
  };

  useEffect(() => setupInstances(), [setupInstances]);

  useEffect(() => {
    window.addEventListener("resize", setupInstances);

    return () => {
      window.removeEventListener("resize", setupInstances);
    };
  }, [looperInstances, setupInstances]);

  // Calculate the current state based on the current animation time
  const currentAnimationState = isPaused ? "paused" : "running";

  return (
    <div
      className="looper"
      ref={outerRef}
      orientation={orientation}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="looper__innerList"
        ref={innerRef}
        style={{ animationPlayState: currentAnimationState }} // Set animation state
        orientation={orientation}
      >
        {[...Array(looperInstances)].map((_, ind) => (
          <div
            key={ind}
            className="looper__listInstance"
            style={{
              animationDuration: `${speed}s`,
              animationPlayState: `${isPaused ? "paused" : "running"}`,
              animationDirection:
                direction === "right" || direction === "down"
                  ? "reverse"
                  : "normal",
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteLooper;
