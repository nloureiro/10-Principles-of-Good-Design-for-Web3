import { useState, useEffect, ReactNode } from "react";
import { useLocation } from "wouter";

interface PageTransitionProps {
  children: ReactNode;
}

// Consistent transition duration for both JS and CSS
const TRANSITION_DURATION_MS = 700;

export default function PageTransition({ children }: PageTransitionProps) {
  const [location] = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("initial");

  useEffect(() => {
    // Start with fade in on first load
    if (transitionStage === "initial") {
      setTransitionStage("fadeIn");
    }
  }, [transitionStage]);

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("fadeOut");
    }
  }, [location, displayLocation]);

  useEffect(() => {
    if (transitionStage === "fadeOut") {
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage("fadeIn");
      }, TRANSITION_DURATION_MS);
      return () => clearTimeout(timer);
    }
  }, [transitionStage, location]);

  return (
    <div
      className={`transition-opacity duration-700 ease-in-out ${
        transitionStage === "fadeOut" || transitionStage === "initial" ? "opacity-0" : "opacity-100"
      }`}
      style={{
        minHeight: "100vh",
        willChange: "opacity"
      }}
    >
      {children}
    </div>
  );
}