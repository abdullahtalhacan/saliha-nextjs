import React, { useEffect, useState} from "react";

type TooltipType = {
  message: any;
  trigger?: "hover" | boolean;
  position?: "top" | "right" | "bottom" | "left";
  duration?: number
  children: JSX.Element | JSX.Element[];
};

const Tooltip = ({ message, position = "bottom", trigger = "hover", duration = 4, children }: TooltipType) => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    setIsVisible(typeof trigger === "boolean" ? trigger : isVisible)
    let timeoutId: NodeJS.Timeout | null = null;
    if (trigger === true) {
      timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, duration * 1000);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }
  }, [trigger]);
  return (
    <div className={`${trigger ? "group/tooltip" : ""} relative`}>
      {children}
      <div className="flex justify-center items-center">
        <div
          className={`absolute w-max max-w-[12rem] z-50 ${
            position === "top"
              ? "bottom-full mb-3"
              : position === "bottom"
              ? "top-full mt-3"
              : position === "left"
              ? "right-full mr-3"
              : position === "right"
              ? "left-full ml-3"
              : "bottom-full mb-3"
          } scale-0 flex text-center items-center justify-center transition-all rounded bg-gray-800 p-2 text-xs text-white ${
            typeof trigger === "boolean"
                ? trigger ? isVisible ? "scale-100" : "scale-0" : "scale-0"
                : "group-hover/tooltip:scale-100"
          }`}
        >
          <div
            className={`absolute w-3 h-3 bg-gray-800 rotate-45 ${
              position === "top"
                ? "-bottom-1"
                : position === "bottom"
                ? "-top-1"
                : position === "left"
                ? "-right-1"
                : position === "right"
                ? "-left-1"
                : "-bottom-1"
            }`}
          ></div>
          <span className="z-50">{message}</span>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
