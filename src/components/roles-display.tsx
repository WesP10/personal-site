
import React, { useEffect, useRef, useState } from "react";

interface RolesDisplayProps {
  roles: string[];
  typingSpeed?: number; // ms per character
  pauseTime?: number; // ms to pause on full word
}


const RolesDisplay: React.FC<RolesDisplayProps> = ({
  roles,
  typingSpeed = 100,
  pauseTime = 1500,
}) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true); // true: typing, false: deleting
  const [showCursor, setShowCursor] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((c) => !c);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const fullText = roles[roleIndex] || "";

    if (typing) {
      if (displayed.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayed(fullText.slice(0, displayed.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setTyping(false);
        }, pauseTime);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(fullText.slice(0, displayed.length - 1));
        }, typingSpeed / 2);
      } else {
        timeout = setTimeout(() => {
          setTyping(true);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, typingSpeed);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex, roles, typingSpeed, pauseTime]);

  // Reset everything if roles array changes
  useEffect(() => {
    setRoleIndex(0);
    setTyping(true);
    setDisplayed("");
  }, [roles]);

  return (
    <>
      {displayed}
      <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
    </>
  );
};

export default RolesDisplay;
